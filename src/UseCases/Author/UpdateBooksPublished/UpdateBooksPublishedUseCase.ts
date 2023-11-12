import { AuthorsPrismaRepository } from 'Database/prisma/implementations/authors-prisma-repository';
import { ExceptionFactory } from 'Factories/ExceptionFactory';

export class UpdateBooksPublishedUseCase {
  constructor(private authorsRepository: AuthorsPrismaRepository) {}

  async execute(id: string, booksPublished: number) {
    await this.authorsRepository.updateBooksPublisehd(id, booksPublished);
  }
}
