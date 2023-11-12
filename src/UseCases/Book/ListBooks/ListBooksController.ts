import { ListBooksUseCase } from './ListBooksUseCase';

export class ListBooksController {
  constructor(private readonly listBooksUseCase: ListBooksUseCase) {}

  handle = async (req: any, res: any, next: any) => {
    try {
      const books = await this.listBooksUseCase.execute();

      return res.status(200).json(books);
    } catch (error) {
      next(error);
    }
  };
}
