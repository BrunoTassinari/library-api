import { BooksPrismaRepository } from 'Database/prisma/implementations/books-prisma-repository';
import { UpdateBookUseCase } from './UpdateBookUseCase';
import { UpdateBookController } from './UpdateBookController';

const booksRepository = new BooksPrismaRepository();
const updateBookUseCase = new UpdateBookUseCase(booksRepository);
const updateBookController = new UpdateBookController(updateBookUseCase);

export { updateBookUseCase, updateBookController };
