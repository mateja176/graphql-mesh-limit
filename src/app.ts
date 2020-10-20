import express from 'express';
import { join } from 'path';
import { RegisterRoutes } from './generated/routes';

export const app = express();

app.use(express.static(join(__dirname, '..', 'public')));

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

RegisterRoutes(app);
