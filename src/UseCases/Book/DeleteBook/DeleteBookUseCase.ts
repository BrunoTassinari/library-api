import { BooksPrismaRepository } from 'Database/prisma/implementations/books-prisma-repository';
import { ExceptionFactory } from 'Factories/ExceptionFactory';
import { GetAuthorUseCase } from 'UseCases/Author/GetAuthor/GetAuthorUseCase';
import { UpdateBooksPublishedUseCase } from 'UseCases/Author/UpdateBooksPublished/UpdateBooksPublishedUseCase';

export class DeleteBookUseCase {
  constructor(
    private bookRepository: BooksPrismaRepository,
    private getAuthorUseCase: GetAuthorUseCase,
    private updateBooksPublishedUseCase: UpdateBooksPublishedUseCase,
  ) {}

  async execute(id: string): Promise<void> {
    const book = await this.bookRepository.findById(id);

    if (!book)
      throw ExceptionFactory.newCustomException(
        'Book not found',
        404,
        'notFoundException',
      );

    const foundAuthor = await this.getAuthorUseCase.execute(book.author_id);

    await this.updateBooksPublishedUseCase.execute(
      book.author_id,
      foundAuthor.books_published - 1,
    );

    await this.bookRepository.delete(id);
  }
}
