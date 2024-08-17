import { BooksPrismaRepository } from 'Infra/Database/prisma/implementations/books-prisma-repository';
import { ListBooksController } from './ListBooksController';
import { ListBooksUseCase } from './ListBooksUseCase';

const booksRepository = new BooksPrismaRepository();
const listBooksUseCase = new ListBooksUseCase(booksRepository);
const listBooksController = new ListBooksController(listBooksUseCase);

export { listBooksController, listBooksUseCase };

