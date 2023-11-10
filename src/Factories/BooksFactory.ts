import { generateUUID } from '@utils/uuid.utils';
import { Book } from 'Entities/Book';
import { CreateBookDTO } from 'UseCases/Book/CreateBook/CreateBookDTO';

export class BooksFactoy {
  public static createBook(props: CreateBookDTO): Book {
    const id = generateUUID();
    const releaseDate = new Date(props.releaseDate);
    const book = new Book({ ...props, id, releaseDate });

    return book;
  }
}
