import { AuthorsPrismaRepository } from 'Database/prisma/implementations/authors-prisma-repository';
import { UpdateAuthorUseCase } from './UpdateAuthorUseCase';
import { UpdateAuthorController } from './UpdateAuthorController';

const authorsRepository = new AuthorsPrismaRepository();
const updateAuthorUseCase = new UpdateAuthorUseCase(authorsRepository);
const updateAuthorController = new UpdateAuthorController(updateAuthorUseCase);

export { updateAuthorUseCase, updateAuthorController };
