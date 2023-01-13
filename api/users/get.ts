import { Handler } from 'express';

export const get: Handler = (_, res) => {
	res.status(200).send('Hello World!');
};
