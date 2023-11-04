import { Router } from 'express';
import { createAuthorController } from 'UseCases/CreateAuthor';

const authorsRoutes = Router();

authorsRoutes.post('/authors', createAuthorController.handle);

export { authorsRoutes };
