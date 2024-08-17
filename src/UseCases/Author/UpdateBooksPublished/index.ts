import { AuthorsPrismaRepository } from 'Infra/Database/prisma/implementations/authors-prisma-repository';
import { UpdateBooksPublishedUseCase } from './UpdateBooksPublishedUseCase';

const authorsPrismaRepository = new AuthorsPrismaRepository();
const updateBooksPublishedUseCase = new UpdateBooksPublishedUseCase(
  authorsPrismaRepository,
);

export { updateBooksPublishedUseCase };
