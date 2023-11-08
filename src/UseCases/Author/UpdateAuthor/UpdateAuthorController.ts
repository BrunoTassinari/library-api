import { UpdateAuthorUseCase } from './UpdateAuthorUseCase';
import { UpdateAuthorDTO } from './UpdateAuthorDTO';

export class UpdateAuthorController {
  constructor(private readonly updateAuthorUseCase: UpdateAuthorUseCase) {}

  handle = async (req: any, res: any, next: any) => {
    try {
      const body = req.body as UpdateAuthorDTO;
      await this.updateAuthorUseCase.execute(req.params.id, body);

      return res.status(204).json({});
    } catch (error: any) {
      return next(error);
    }
  };
}
