import { Book } from 'Entities/Book';

export interface IBooksRepository {
  create(book: Book): Promise<Book>;
}