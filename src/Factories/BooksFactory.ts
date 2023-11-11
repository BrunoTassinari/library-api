import { generateUUID } from '@utils/uuid.utils';
import { Book } from 'Entities/Book';
import { CreateBookDTO } from 'UseCases/Book/CreateBook/CreateBookDTO';

export class BooksFactoy {
  public static createBook(props: CreateBookDTO): Book {
    const id = generateUUID();
    const release_date = new Date(props.release_date);
    const book = new Book({ ...props, id, release_date });

    return book;
  }
}
