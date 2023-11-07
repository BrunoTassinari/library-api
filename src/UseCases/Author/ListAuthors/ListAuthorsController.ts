import { ListAuthorsUseCase } from "./ListAuthorsUseCase";

export class ListAuthorsController {
  constructor(private readonly listAuthorsUseCase: ListAuthorsUseCase) {}

  handle = async (req: any, res: any, next: any) => {
    try {
      const authors = await this.listAuthorsUseCase.execute();

      return res.status(200).json(authors);
    } catch (error: any) {
      return next(error);
    }
  };
}
