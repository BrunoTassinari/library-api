import { BooksPrismaRepository } from 'Database/prisma/implementations/books-prisma-repository';
import { BooksFactoy } from 'Factories/BooksFactory';
import { ExceptionFactory } from 'Factories/ExceptionFactory';
import { UpdateBookDTO } from './UpdateBookDTO';

export class UpdateBookUseCase {
  constructor(private booksRepository: BooksPrismaRepository) {}

  async execute(id: string, book: UpdateBookDTO): Promise<void> {
    const bookExists = await this.booksRepository.findById(id);

    if (!bookExists)
      throw ExceptionFactory.newCustomException(
        'Book not found',
        404,
        'notFoundException',
      );

    const updatedBook = BooksFactoy.createBook({
      ...bookExists,
      ...book,
    });

    await this.booksRepository.update(id, updatedBook);
  }
}
