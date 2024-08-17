import { AuthorsPrismaRepository } from "Infra/Database/prisma/implementations/authors-prisma-repository";
import { ListAuthorsController } from "./ListAuthorsController";
import { ListAuthorsUseCase } from "./ListAuthorsUseCase";

const listAuthorsUseCase = new ListAuthorsUseCase(
  new AuthorsPrismaRepository()
);

const listAuthorsController = new ListAuthorsController(listAuthorsUseCase);

export { listAuthorsController, listAuthorsUseCase };

