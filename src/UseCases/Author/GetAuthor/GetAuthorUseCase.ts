import { IAuthorsRepository } from 'Repositories/IAuthorsRepository';
import { ExceptionFactory } from '../../../Factories/ExceptionFactory';

export class GetAuthorUseCase {
  constructor(private repository: IAuthorsRepository) {}

  async execute(id: string) {
    const author = await this.repository.findById(id);

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
