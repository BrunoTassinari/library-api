import { IAuthorsRepository } from 'Repositories/IAuthorsRepository';

export class DeleteAuthorUseCase {
  constructor(private authorsRepository: IAuthorsRepository) {}

  async execute(id: string) {
    await this.authorsRepository.delete(id);
  }
}
