import { v4 as uuidv4 } from 'uuid';
import { Author } from 'Entities/Author';
import { CreateAuthorDTO } from '../UseCases/Author/CreateAuthor/CreateAuthorDTO';

export class AuthorsFactory {
  public static createAuthor(createAuthorDTO: CreateAuthorDTO) {
    const id = uuidv4();
    const books_published = 0;

    const author = new Author({ ...createAuthorDTO, books_published, id });
    return author;
  }
}
