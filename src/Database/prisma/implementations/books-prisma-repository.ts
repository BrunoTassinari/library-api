import { Book } from 'Entities/Book';
import { PrismaClient } from '@prisma/client';
import { IBooksRepository } from 'Repositories/IBooksRepository';

export class BooksPrismaRepository implements IBooksRepository {
  prisma = new PrismaClient();

  async create(book: Book): Promise<Book> {
    const bookCreated = await this.prisma.book.create({
      data: {
        id: book.id,
        name: book.name,
        releaseDate: book.releaseDate,
        pages: book.pages,
        authorId: book.authorId,
        description: book.description,
      },
    });

    return bookCreated;
  }
}
