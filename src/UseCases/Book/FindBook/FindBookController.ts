import { FindBookUseCase } from './FindBookUseCase';

export class FindBookController {
  constructor(private readonly findBookUseCase: FindBookUseCase) {}

  handle = async (req: any, res: any, next: any) => {
    try {
      const book = await this.findBookUseCase.execute(req.params.id);

      return res.status(200).json(book);
    } catch (error) {
      next(error);
    }
  };
}
