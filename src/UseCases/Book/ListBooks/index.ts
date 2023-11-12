import { BooksPrismaRepository } from 'Database/prisma/implementations/books-prisma-repository';
import { ListBooksUseCase } from './ListBooksUseCase';
import { ListBooksController } from './ListBooksController';

const booksRepository = new BooksPrismaRepository();
const listBooksUseCase = new ListBooksUseCase(booksRepository);
const listBooksController = new ListBooksController(listBooksUseCase);

export { listBooksUseCase, listBooksController };
