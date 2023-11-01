import { AuthorsPrismaRepository } from '@implemetations/authors-prisma-repository';
import { CreateAuthorDTO } from '@dtos/Author/CreateAuthorDTO';
import { AuthorsFactory } from '@factories/AuthorsFactory';

export class CreateAuthorUseCase {
  constructor(
    private authorsRepository: AuthorsPrismaRepository,
    private authorsFactory: AuthorsFactory,
  ) {}

  async execute(authorData: CreateAuthorDTO) {
    const Author = this.authorsFactory.createAuthor(authorData);

    return this.authorsRepository.create(Author);
  }
}
