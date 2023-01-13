import { Router } from 'express';
import { users } from './users';

export const api = Router();

api.use('/users', users);
