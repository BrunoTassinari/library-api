import { BooksPrismaRepository } from 'Database/prisma/implementations/books-prisma-repository';
import { ExceptionFactory } from 'Factories/ExceptionFactory';

export class FindBookUseCase {
  constructor(private bookRepository: BooksPrismaRepository) {}

  async execute(id: string) {
    const book = await this.bookRepository.findById(id);

    if (!book)
      throw ExceptionFactory.newCustomException(
        'Book not found',
        404,
        'notFoundException',
      );

    return book;
  }
}
