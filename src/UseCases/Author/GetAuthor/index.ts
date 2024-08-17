import { DependencyContainer } from 'Infra/IoC/DependencyContainer';
import { IAuthorsRepository } from 'Repositories/IAuthorsRepository';
import { GetAuthorController } from './GetAuthorController';
import { GetAuthorUseCase } from './GetAuthorUseCase';

const repository =
  DependencyContainer.resolve<IAuthorsRepository>('IAuthorsRepository');

const getAuthorUseCase = new GetAuthorUseCase(repository);
const getAuthorController = new GetAuthorController(getAuthorUseCase);

export { getAuthorController, getAuthorUseCase };
