import { AuthorsPrismaRepository } from 'Infra/Database/prisma/implementations/authors-prisma-repository';
import { UpdateAuthorController } from './UpdateAuthorController';
import { UpdateAuthorUseCase } from './UpdateAuthorUseCase';

const authorsRepository = new AuthorsPrismaRepository();
const updateAuthorUseCase = new UpdateAuthorUseCase(authorsRepository);
const updateAuthorController = new UpdateAuthorController(updateAuthorUseCase);

export { updateAuthorController, updateAuthorUseCase };

