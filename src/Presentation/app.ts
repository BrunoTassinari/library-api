import express from 'express';
import { authorsRoutes } from './Routes/AuthorRoutes';
import { errorMiddleware } from './Middlewares/errorMiddleware';
import { notFoundMiddleware } from './Middlewares/notFoundMiddleware';

const app = express();

app.use(express.json());
app.use(authorsRoutes);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export { app };
