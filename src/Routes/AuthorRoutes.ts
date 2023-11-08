import { Router } from 'express';
import {
  createAuthorController,
  listAuthorsController,
  getAuthorController,
  updateAuthorController,
  deleteAuthorController,
} from 'UseCases/Author';

const authorsRoutes = Router();

authorsRoutes.post('/authors', createAuthorController.handle);
authorsRoutes.get('/authors/:id', getAuthorController.handle);
authorsRoutes.get('/authors', listAuthorsController.handle);
authorsRoutes.put('/authors/:id', updateAuthorController.handle);
authorsRoutes.delete('/authors/:id', deleteAuthorController.handle);

export { authorsRoutes };
