import express from 'express';
import { authorsRoutes } from './Routes/AuthorRoutes';

const app = express();

app.use(express.json());
app.use(authorsRoutes);

export { app };
