import express from 'express';
import { authorsRoutes } from './Routes/AuthorRoutes';
import { SendErrorMiddleware } from './Middlewares/SendErrorMiddlewate';

const app = express();

app.use(express.json());
app.use(authorsRoutes);

app.use(SendErrorMiddleware)

export { app };
