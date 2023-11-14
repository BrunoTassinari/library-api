import { AuthorsPrismaRepository } from 'Database/prisma/implementations/authors-prisma-repository';
import { BooksPrismaRepository } from 'Database/prisma/implementations/books-prisma-repository';
import { DeleteBookUseCase } from './DeleteBookUseCase';
import { UpdateBooksPublishedUseCase } from 'UseCases/Author/UpdateBooksPublished/UpdateBooksPublishedUseCase';
import { GetAuthorUseCase } from 'UseCases/Author/GetAuthor/GetAuthorUseCase';
import { DeleteBookController } from './DeteleBookController';

const bookRepository = new BooksPrismaRepository();
const authorRepository = new AuthorsPrismaRepository();
const getAuthorUseCase = new GetAuthorUseCase(authorRepository);
const updateBooksPublishedUseCase = new UpdateBooksPublishedUseCase(
  authorRepository,
);
const deleteBookUseCase = new DeleteBookUseCase(
  bookRepository,
  getAuthorUseCase,
  updateBooksPublishedUseCase,
);

const deleteBookController = new DeleteBookController(deleteBookUseCase);

export { deleteBookUseCase, deleteBookController };
