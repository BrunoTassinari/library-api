import { Book } from 'Entities/Book';
import { PrismaClient } from '@prisma/client';
import { IBooksRepository } from 'Repositories/IBooksRepository';

export class BooksPrismaRepository implements IBooksRepository {
  prisma = new PrismaClient();

  async create(book: Book): Promise<Book> {
    const bookCreated = await this.prisma.book.create({
      data: {
        id: book.id,
        title: book.title,
        release_date: book.release_date,
        pages: book.pages,
        price: book.price,
        author_id: book.author_id,
        description: book.description,
      },
    });

    return bookCreated;
  }
}
