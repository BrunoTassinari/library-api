import { AuthorsPrismaRepository } from '../../../Database/prisma/implementations/authors-prisma-repository';
import { CreateAuthorDTO } from './CreateAuthorDTO';
import { AuthorsFactory } from '../../../Factories/AuthorsFactory';
import { ExceptionFactory } from '../../../Factories/ExceptionFactory';

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
