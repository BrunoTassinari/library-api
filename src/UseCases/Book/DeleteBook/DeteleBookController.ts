import { DeleteBookUseCase } from './DeleteBookUseCase';

export class DeleteBookController {
  constructor(private deleteBookUseCase: DeleteBookUseCase) {}

  handle = async (req: any, res: any, next: any) => {
    try {
      await this.deleteBookUseCase.execute(req.params.id);

      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  };
}
