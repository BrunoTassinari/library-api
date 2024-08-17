import { AuthorsPrismaRepository } from 'Infra/Database/prisma/implementations/authors-prisma-repository';
import { DeleteAuthorController } from './DeleteAuthorController';
import { DeleteAuthorUseCase } from './DeleteAuthorUseCase';

const authorsRepository = new AuthorsPrismaRepository();
const deleteAuthorUseCase = new DeleteAuthorUseCase(authorsRepository);
const deleteAuthorController = new DeleteAuthorController(deleteAuthorUseCase);

export { deleteAuthorController, deleteAuthorUseCase };

