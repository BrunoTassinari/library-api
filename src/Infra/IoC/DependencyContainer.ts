import { AuthorsPrismaRepository } from 'Infra/Database/prisma/implementations/authors-prisma-repository';
import { IAuthorsRepository } from 'Repositories/IAuthorsRepository';

export class DependencyContainer {
  private static dependencies = new Map<string, any>();

  static register<T>(key: string, instance: T) {
    this.dependencies.set(key, instance);
  }

  static resolve<T>(key: string): T {
    const dependency = this.dependencies.get(key);
    if (!dependency) {
      throw new Error(`Dependency ${key} not found`);
    }
    return dependency as T;
  }
}

DependencyContainer.register<IAuthorsRepository>(
  'IAuthorsRepository',
  new AuthorsPrismaRepository(),
);
