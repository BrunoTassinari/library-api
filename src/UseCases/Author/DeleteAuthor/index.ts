import { AuthorsPrismaRepository } from 'Database/prisma/implementations/authors-prisma-repository';
import { DeleteAuthorUseCase } from './DeleteAuthorUseCase';
import { DeleteAuthorController } from './DeleteAuthorController';

const authorsRepository = new AuthorsPrismaRepository();
const deleteAuthorUseCase = new DeleteAuthorUseCase(authorsRepository);
const deleteAuthorController = new DeleteAuthorController(deleteAuthorUseCase);

export { deleteAuthorUseCase, deleteAuthorController };
