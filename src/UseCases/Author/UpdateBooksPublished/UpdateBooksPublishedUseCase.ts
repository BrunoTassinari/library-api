import { AuthorsPrismaRepository } from 'Infra/Database/prisma/implementations/authors-prisma-repository';

export class UpdateBooksPublishedUseCase {
  constructor(private authorsRepository: AuthorsPrismaRepository) {}

  async execute(id: string, booksPublished: number) {
    await this.authorsRepository.updateBooksPublisehd(id, booksPublished);
  }
}
