import { BooksPrismaRepository } from 'Database/prisma/implementations/books-prisma-repository';

export class ListBooksUseCase {
  constructor(private booksRepository: BooksPrismaRepository) {}

  async execute() {
    const books = await this.booksRepository.list();

    return books;
  }
}
