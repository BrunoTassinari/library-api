import { AuthorsPrismaRepository } from 'Database/prisma/implementations/authors-prisma-repository';
import { GetAuthorController } from './GetAuthorController';
import { GetAuthorUseCase } from './GetAuthorUseCase';

const getAuthorUseCase = new GetAuthorUseCase(new AuthorsPrismaRepository());

const getAuthorController = new GetAuthorController(getAuthorUseCase);

export { getAuthorUseCase, getAuthorController };
