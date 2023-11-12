import { createBookController, listBooksController } from 'UseCases/Book';
import { Router } from 'express';

const booksRoutes = Router();

booksRoutes.post('/books', createBookController.handle);
booksRoutes.get('/books', listBooksController.handle);

export { booksRoutes };
