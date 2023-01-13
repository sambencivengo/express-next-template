import express from 'express';
import next from 'next';
import cors from 'cors';
import { env } from './env';
import { api } from './api';

console.log(`Node environment: ${env.nodeEnv}`);
const port = process.env.PORT || 8000;
const dev = env.nodeEnv !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
	.then(async () => {
		const server = express();

		server.use(
			cors({
				credentials: true,
				origin: env.websiteUrl,
			})
		);

		server.use('/api', api);

		server.get('/*', (req, res) => {
			return handle(req, res);
		});

		server.listen(port, () => {
			console.log(`Server is listening on PORT:${port}`);
		});
	})
	.catch((error) => {
		console.error(`App has crashed: ${error}`);
	});
