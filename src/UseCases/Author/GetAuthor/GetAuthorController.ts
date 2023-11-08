import { GetAuthorUseCase } from './GetAuthorUseCase';

export class GetAuthorController {
  constructor(private readonly getAuthorUseCase: GetAuthorUseCase) {}

  handle = async (req: any, res: any, next: any) => {
    try {
      const author = await this.getAuthorUseCase.execute(req.params.id);

      return res.status(200).json(author);
    } catch (error: any) {
      return next(error);
    }
  };
}
