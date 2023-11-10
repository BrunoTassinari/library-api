import { createBookController } from 'UseCases/Book/CreateBook';
import { Router } from 'express';

const booksRoutes = Router();

booksRoutes.post('/books', createBookController.handle);

export { booksRoutes };
