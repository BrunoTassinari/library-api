import { PrismaClient } from '@prisma/client';
import { Author } from 'Entities/Author';
import { IAuthorsRepository } from '../../../../Repositories/IAuthorsRepository';

export class AuthorsPrismaRepository implements IAuthorsRepository {
  prisma = new PrismaClient();

  async create(author: Author): Promise<Author> {
    const authorCreated = await this.prisma.author.create({
      data: {
        id: author.id,
        name: author.name,
        nationality: author.nationality,
        books_published: author.books_published,
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
        books_published: author.books_published,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.author.delete({
      where: { id },
    });
  }

  async updateBooksPublisehd(
    id: string,
    books_published: number,
  ): Promise<void> {
    await this.prisma.author.update({
      where: { id },
      data: {
        books_published: books_published,
      },
    });
  }
}
