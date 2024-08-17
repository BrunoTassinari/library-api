import { AuthorsPrismaRepository } from "Infra/Database/prisma/implementations/authors-prisma-repository";
import { CreateAuthorController } from "./CreateAuthorController";
import { CreateAuthorUseCase } from "./CreateAuthorUseCase";

const createAuthorUseCase = new CreateAuthorUseCase(
  new AuthorsPrismaRepository()
);

const createAuthorController = new CreateAuthorController(createAuthorUseCase);

export { createAuthorController, createAuthorUseCase };

