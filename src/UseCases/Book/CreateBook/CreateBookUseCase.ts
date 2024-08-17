import { BooksFactoy } from 'Factories/BooksFactory';
import { ExceptionFactory } from 'Factories/ExceptionFactory';
import { BooksPrismaRepository } from 'Infra/Database/prisma/implementations/books-prisma-repository';
import { GetAuthorUseCase } from 'UseCases/Author/GetAuthor/GetAuthorUseCase';
import { UpdateBooksPublishedUseCase } from 'UseCases/Author/UpdateBooksPublished/UpdateBooksPublishedUseCase';
import { CreateBookDTO } from './CreateBookDTO';

export class CreateBookUseCase {
  constructor(
    private booksRepository: BooksPrismaRepository,
    private getAuthorUseCase: GetAuthorUseCase,
    private updateBooksPublishedUseCase: UpdateBooksPublishedUseCase,
  ) {}

  async execute(data: CreateBookDTO) {
    const foundAuthor = await this.getAuthorUseCase.execute(data.author_id);

    if (!foundAuthor)
      throw ExceptionFactory.newCustomException(
        'Author not found',
        404,
        'notFoundException',
      );

    await this.updateBooksPublishedUseCase.execute(
      data.author_id,
      foundAuthor.books_published + 1,
    );

    const book = BooksFactoy.createBook(data);

    const bookCreated = await this.booksRepository.create(book);

    return bookCreated;
  }
}
