import { Book } from 'Entities/Book';

export interface IBooksRepository {
  create(book: Book): Promise<Book>;

  list(): Promise<Book[]>;

  findById(id: string): Promise<Book | null>;

  update(id: string, book: Book): Promise<void>;

  delete(id: string): Promise<void>;
}
