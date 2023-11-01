import { Router } from 'express';
import { AuthorsPrismaRepository } from '@implemetations/authors-prisma-repository';
import { AuthorMapper } from '@mappers/AuthorMapper';
import { AuthorsFactory } from '@factories/AuthorsFactory';
import { CreateAuthorUseCase } from '@useCases/CreateAuthor/CreateAuthorUseCase';
import { CreateAuthorController } from '@controllers/Authors/CreateAuthorController';

const authorMapper = new AuthorMapper();
const authorsFactory = new AuthorsFactory(authorMapper);
const authorsRepository = new AuthorsPrismaRepository();
const createAuthorUseCase = new CreateAuthorUseCase(
  authorsRepository,
  authorsFactory,
);

const createAuthorController = new CreateAuthorController(createAuthorUseCase);
const authorsRoutes = Router();

authorsRoutes.post('/authors', createAuthorController.handle);

export { authorsRoutes };
