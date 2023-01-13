import { Router } from 'express';
import { get } from './get';

export const users = Router();

users.use('', get);
