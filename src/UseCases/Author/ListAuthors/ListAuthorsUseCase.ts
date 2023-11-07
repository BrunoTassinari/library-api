import { AuthorsPrismaRepository } from '../../../Database/prisma/implementations/authors-prisma-repository';
import { ExceptionFactory } from '../../../Factories/ExceptionFactory';

export class ListAuthorsUseCase {
  constructor(
    private authorsRepository: AuthorsPrismaRepository,
  ) {}

  async execute() {
    const authors = await this.authorsRepository.list();
    
    return authors
  }
}
