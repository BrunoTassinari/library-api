import { AuthorsFactory } from 'Factories/AuthorsFactory';
import { ExceptionFactory } from 'Factories/ExceptionFactory';
import { AuthorsPrismaRepository } from 'Infra/Database/prisma/implementations/authors-prisma-repository';
import { UpdateAuthorDTO } from './UpdateAuthorDTO';

export class UpdateAuthorUseCase {
  constructor(private authorsRepository: AuthorsPrismaRepository) {}

  async execute(id: string, authorData: UpdateAuthorDTO) {
    const author = await this.authorsRepository.findById(id);

    if (!author)
      throw ExceptionFactory.newCustomException(
        'Author not found',
        404,
        'notFoundExeption',
      );

    const updatedAuthor = AuthorsFactory.createAuthor({
      ...author,
      ...authorData,
    });

    await this.authorsRepository.update(id, updatedAuthor);
  }
}
