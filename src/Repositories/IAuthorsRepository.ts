import { Author } from '../Entities/Author';

export interface IAuthorsRepository {
  create(author: Author): Promise<Author>;

  list(): Promise<Author[]>;

  findById(id: string): Promise<Author | null>;

  update(id: string, author: Author): Promise<void>;

  delete(id: string): Promise<void>;
}
