import { BooksPrismaRepository } from 'Infra/Database/prisma/implementations/books-prisma-repository';
import { UpdateBookController } from './UpdateBookController';
import { UpdateBookUseCase } from './UpdateBookUseCase';

const booksRepository = new BooksPrismaRepository();
const updateBookUseCase = new UpdateBookUseCase(booksRepository);
const updateBookController = new UpdateBookController(updateBookUseCase);

export { updateBookController, updateBookUseCase };

