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

  list(): Promise<Author[]> {
    const authors = this.prisma.author.findMany();

    return authors;
  }

  async findById(id: string): Promise<Author | null> {
    const author = await this.prisma.author.findUnique({
      where: {
        id,
      },
    });

    return author;
  }

  async update(id: string, author: Author): Promise<void> {
    await this.prisma.author.update({
      where: { id },
      data: {
        name: author.name,
        nationality: author.nationality,
        booksPublished: author.booksPublished,
      },
    });
  }
}
