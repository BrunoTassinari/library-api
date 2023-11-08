import { DeleteAuthorUseCase } from './DeleteAuthorUseCase';

export class DeleteAuthorController {
  constructor(private readonly deleteAuthorUseCase: DeleteAuthorUseCase) {}

  handle = async (req: any, res: any, next: any) => {
    try {
      await this.deleteAuthorUseCase.execute(req.params.id);

      return res.status(204).json({});
    } catch (error: any) {
      return next(error);
    }
  };
}
