import { CreateAuthorUseCase } from './CreateAuthorUseCase';
import { CreateAuthorDTO } from './CreateAuthorDTO';

export class CreateAuthorController {
  constructor(private readonly createAuthorUseCase: CreateAuthorUseCase) {}

  handle = async (req: any, res: any, next: any) => {
    try {
      const body = req.body as CreateAuthorDTO;
      const createAuthor = await this.createAuthorUseCase.execute(body);

      return res.status(201).json(createAuthor);
    } catch (error: any) {
      return next(error);
    }
  };
}
