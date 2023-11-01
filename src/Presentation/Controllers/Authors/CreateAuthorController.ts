import { CreateAuthorUseCase } from '@useCases/CreateAuthor/CreateAuthorUseCase';
import { CreateAuthorDTO } from '@dtos/Author/CreateAuthorDTO';

export class CreateAuthorController {
  constructor(private readonly createAuthorUseCase: CreateAuthorUseCase) {}

  handle = async (req: any, res: any, next: any) => {
    const { name, nationality } = req.body as CreateAuthorDTO;

    try {
      const author = await this.createAuthorUseCase.execute({
        name,
        nationality,
      });

      return res.status(201).json(author);
    } catch (error: any) {
     next(error);
    }
  };
}
