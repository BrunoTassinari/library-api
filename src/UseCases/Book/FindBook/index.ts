import { BooksPrismaRepository } from 'Infra/Database/prisma/implementations/books-prisma-repository';
import { FindBookController } from './FindBookController';
import { FindBookUseCase } from './FindBookUseCase';

const bookRepository = new BooksPrismaRepository();
const findBookUseCase = new FindBookUseCase(bookRepository);
const findBookController = new FindBookController(findBookUseCase);

export { findBookController, findBookUseCase };
