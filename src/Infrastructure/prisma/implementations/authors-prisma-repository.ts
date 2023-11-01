import { PrismaClient } from '@prisma/client';
import { IAuthorsRepository } from '@repositories/IAuthorsRepository';
import { Author } from '@entities/Author';

export class AuthorsPrismaRepository implements IAuthorsRepository {
  prisma = new PrismaClient();

  async create(author: Author): Promise<void> {
    await this.prisma.author.create({
      data: {
        id: author.id,
        name: author.name,
        nationality: author.nationality,
        booksPublished: author.booksPublished,
      },
    });
  }
}
