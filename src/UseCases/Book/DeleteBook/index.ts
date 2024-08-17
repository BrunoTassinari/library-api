import { AuthorsPrismaRepository } from 'Infra/Database/prisma/implementations/authors-prisma-repository';
import { BooksPrismaRepository } from 'Infra/Database/prisma/implementations/books-prisma-repository';
import { GetAuthorUseCase } from 'UseCases/Author/GetAuthor/GetAuthorUseCase';
import { UpdateBooksPublishedUseCase } from 'UseCases/Author/UpdateBooksPublished/UpdateBooksPublishedUseCase';
import { DeleteBookUseCase } from './DeleteBookUseCase';
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

export { deleteBookController, deleteBookUseCase };

