import { AuthorsFactory } from '../../../Factories/AuthorsFactory';
import { AuthorsPrismaRepository } from '../../../Infra/Database/prisma/implementations/authors-prisma-repository';
import { CreateAuthorDTO } from './CreateAuthorDTO';

export class CreateAuthorUseCase {
  constructor(
    private authorsRepository: AuthorsPrismaRepository,
  ) {}

  async execute(authorData: CreateAuthorDTO) {
    const Author = AuthorsFactory.createAuthor(authorData);

    const createAuthor = await this.authorsRepository.create(Author);
    

    return createAuthor
  }
}
