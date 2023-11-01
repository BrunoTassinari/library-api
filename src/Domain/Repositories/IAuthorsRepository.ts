import { Author } from '../Entities/Author';

export interface IAuthorsRepository {
  create(author: Author): void;
}
