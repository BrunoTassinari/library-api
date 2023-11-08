import { AuthorsPrismaRepository } from '../../../Database/prisma/implementations/authors-prisma-repository';
import { ExceptionFactory } from '../../../Factories/ExceptionFactory';

export class GetAuthorUseCase {
  constructor(private authorsRepository: AuthorsPrismaRepository) {}

  async execute(id: string) {
    const author = await this.authorsRepository.findById(id);

    if (!author) {
      throw ExceptionFactory.newCustomException(
        'Author not found',
        404,
        'notFoundException',
      );
    }

    return author;
  }
}
