import { AuthorsPrismaRepository } from "Infra/prisma/implementations/authors-prisma-repository";
import { CreateAuthorUseCase } from "./CreateAuthorUseCase";
import { CreateAuthorController } from "./CreateAuthorController";

const createAuthorUseCase = new CreateAuthorUseCase(
  new AuthorsPrismaRepository()
);

const createAuthorController = new CreateAuthorController(createAuthorUseCase);

export { createAuthorUseCase, createAuthorController };
