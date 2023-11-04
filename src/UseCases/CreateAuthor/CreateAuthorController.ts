import { CreateAuthorUseCase } from './CreateAuthorUseCase';
import { CreateAuthorDTO } from './CreateAuthorDTO';

export class CreateAuthorController {
  constructor(private readonly createAuthorUseCase: CreateAuthorUseCase) {}

  handle = async (req: any, res: any, next: any) => {
    const { name, nationality } = req.body as CreateAuthorDTO;

    try {
      const author = await this.createAuthorUseCase.execute(res, {
        name,
        nationality,
      });

      return res.status(201).json(author);
    } catch (error: any) {
      return next(error);
    }
  };
}
