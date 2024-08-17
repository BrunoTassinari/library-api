import { ExceptionFactory } from 'Factories/ExceptionFactory';
import { BooksPrismaRepository } from 'Infra/Database/prisma/implementations/books-prisma-repository';

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
