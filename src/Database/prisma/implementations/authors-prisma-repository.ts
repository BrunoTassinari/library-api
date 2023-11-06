import { PrismaClient } from '@prisma/client';
import { IAuthorsRepository } from '../../../Repositories/IAuthorsRepository';
import { Author } from 'Entities/Author';

export class AuthorsPrismaRepository implements IAuthorsRepository {
  prisma = new PrismaClient();

  async create(author: Author): Promise<Author> {
    const authorCreated = await this.prisma.author.create({
      data: {
        id: author.id,
        name: author.name,
        nationality: author.nationality,
        booksPublished: author.booksPublished,
      },
    });

    return authorCreated;
  }
}
