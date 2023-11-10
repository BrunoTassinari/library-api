import { CreateBookUseCase } from './CreateBookUseCase';

export class CreateBookController {
  constructor(private readonly createBookUseCase: CreateBookUseCase) {}

  async handle(req: any, res: any, next: any) {
    try {
      const createdBook = await this.createBookUseCase.execute(req.body);

      res.status(201).json(createdBook);
    } catch (error) {
      next(error);
    }
  }
}
