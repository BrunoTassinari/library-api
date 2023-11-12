import { UpdateBookDTO } from './UpdateBookDTO';
import { UpdateBookUseCase } from './UpdateBookUseCase';

export class UpdateBookController {
  constructor(private readonly updateBookUseCase: UpdateBookUseCase) {}

  handle = async (req: any, res: any, next: any): Promise<void> => {
    try {
      const body = req.body as UpdateBookDTO;
      await this.updateBookUseCase.execute(req.params.id, body);

      res.status(204).send();
    } catch (error) {
      next(error);
    }
  };
}
