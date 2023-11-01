import { Author } from '@entities/Author';
import { CreateAuthorDTO } from '@dtos/Author/CreateAuthorDTO';

export class AuthorMapper {
  toDomain(createAuthorDTO: CreateAuthorDTO, id: string) {
    const authorMapped = { ...createAuthorDTO, booksPublished: 0, id };
    return new Author(authorMapped);
  }
}
