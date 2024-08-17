import { AuthorsPrismaRepository } from 'Infra/Database/prisma/implementations/authors-prisma-repository';
import { BooksPrismaRepository } from 'Infra/Database/prisma/implementations/books-prisma-repository';
import { GetAuthorUseCase } from 'UseCases/Author/GetAuthor/GetAuthorUseCase';
import { UpdateBooksPublishedUseCase } from 'UseCases/Author/UpdateBooksPublished/UpdateBooksPublishedUseCase';
import { CreateBookController } from './CreateBookController';
import { CreateBookUseCase } from './CreateBookUseCase';

const booksPrismaRepository = new BooksPrismaRepository();
const authorsPrismaRepository = new AuthorsPrismaRepository();
const getAuthorUseCase = new GetAuthorUseCase(authorsPrismaRepository);
const updateBooksPublishedUseCase = new UpdateBooksPublishedUseCase(
  authorsPrismaRepository,
);

const createBookUseCase = new CreateBookUseCase(
  booksPrismaRepository,
  getAuthorUseCase,
  updateBooksPublishedUseCase,
);
const createBookController = new CreateBookController(createBookUseCase);

export { createBookController, createBookUseCase };

