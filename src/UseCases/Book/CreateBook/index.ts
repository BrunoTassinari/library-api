import { BooksPrismaRepository } from 'Database/prisma/implementations/books-prisma-repository';
import { CreateBookUseCase } from './CreateBookUseCase';
import { CreateBookController } from './CreateBookController';
import { GetAuthorUseCase } from 'UseCases/Author/GetAuthor/GetAuthorUseCase';
import { AuthorsPrismaRepository } from 'Database/prisma/implementations/authors-prisma-repository';
import { UpdateBooksPublishedUseCase } from 'UseCases/Author/UpdateBooksPublished/UpdateBooksPublishedUseCase';

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

export { createBookUseCase, createBookController };
