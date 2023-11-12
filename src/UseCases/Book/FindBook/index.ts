import { BooksPrismaRepository } from 'Database/prisma/implementations/books-prisma-repository';
import { FindBookUseCase } from './FindBookUseCase';
import { FindBookController } from './FindBookController';

const bookRepository = new BooksPrismaRepository();
const findBookUseCase = new FindBookUseCase(bookRepository);
const findBookController = new FindBookController(findBookUseCase);

export { findBookController, findBookUseCase };
