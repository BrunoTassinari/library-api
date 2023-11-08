import { Router } from 'express';
import {
  createAuthorController,
  listAuthorsController,
  getAuthorController,
} from 'UseCases/Author';

const authorsRoutes = Router();

authorsRoutes.post('/authors', createAuthorController.handle);
authorsRoutes.get('/authors/:id', getAuthorController.handle);
authorsRoutes.get('/authors', listAuthorsController.handle);

export { authorsRoutes };
