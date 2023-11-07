import { AuthorsPrismaRepository } from "Database/prisma/implementations/authors-prisma-repository";
import { ListAuthorsUseCase } from "./ListAuthorsUseCase";
import { ListAuthorsController } from "./ListAuthorsController";

const listAuthorsUseCase = new ListAuthorsUseCase(
  new AuthorsPrismaRepository()
);

const listAuthorsController = new ListAuthorsController(listAuthorsUseCase);

export { listAuthorsUseCase, listAuthorsController };
