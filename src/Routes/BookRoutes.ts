import {
  createBookController,
  listBooksController,
  findBookController,
  updateBookController,
} from 'UseCases/Book';
import { Router } from 'express';

const booksRoutes = Router();

booksRoutes.post('/books', createBookController.handle);
booksRoutes.get('/books/:id', findBookController.handle);
booksRoutes.get('/books', listBooksController.handle);
booksRoutes.put('/books/:id', updateBookController.handle);

export { booksRoutes };
