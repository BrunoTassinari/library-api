import { v4 as uuidv4 } from 'uuid';
import { Author } from '@entities/Author';
import { CreateAuthorDTO } from '@dtos/Author/CreateAuthorDTO';
import { AuthorMapper } from '@mappers/AuthorMapper';

export class AuthorsFactory {
  constructor(private mapper: AuthorMapper) {}

  createAuthor(createAuthorDTO: CreateAuthorDTO) {
    const id = uuidv4();
    const author = new Author(this.mapper.toDomain(createAuthorDTO, id));
    return author;
  }
}
