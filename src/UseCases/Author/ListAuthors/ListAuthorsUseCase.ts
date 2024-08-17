import { AuthorsPrismaRepository } from '../../../Infra/Database/prisma/implementations/authors-prisma-repository';

export class ListAuthorsUseCase {
  constructor(
    private authorsRepository: AuthorsPrismaRepository,
  ) {}

  async execute() {
    const authors = await this.authorsRepository.list();
    
    return authors
  }
}
