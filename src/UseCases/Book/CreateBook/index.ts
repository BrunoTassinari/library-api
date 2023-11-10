import { BooksPrismaRepository } from 'Database/prisma/implementations/books-prisma-repository';
import { CreateBookUseCase } from './CreateBookUseCase';
import { CreateBookController } from './CreateBookController';

const booksPrismaRepository = new BooksPrismaRepository();
const createBookUseCase = new CreateBookUseCase(booksPrismaRepository);
const createBookController = new CreateBookController(createBookUseCase);

export { createBookUseCase, createBookController };
