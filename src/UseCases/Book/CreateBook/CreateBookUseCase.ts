import { BooksPrismaRepository } from 'Database/prisma/implementations/books-prisma-repository';
import { CreateBookDTO } from './CreateBookDTO';
import { BooksFactoy } from 'Factories/BooksFactory';

export class CreateBookUseCase {
  constructor(private readonly booksRepository: BooksPrismaRepository) {}

  async execute(data: CreateBookDTO) {
    const book = BooksFactoy.createBook(data);

    const bookCreated = await this.booksRepository.create(book);

    return bookCreated;
  }
}
