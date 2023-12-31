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

  async list(): Promise<Book[]> {
    const books = await this.prisma.book.findMany();

    return books;
  }

  async findById(id: string): Promise<Book | null> {
    const book = await this.prisma.book.findUnique({
      where: {
        id,
      },
    });

    return book;
  }

  async update(id: string, book: Book): Promise<void> {
    await this.prisma.book.update({
      where: { id },
      data: {
        title: book.title,
        release_date: book.release_date,
        pages: book.pages,
        price: book.price,
        author_id: book.author_id,
        description: book.description,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.book.delete({
      where: {
        id,
      },
    });
  }
}
