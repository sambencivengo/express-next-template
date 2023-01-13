import express from 'express';
import next from 'next';

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
const port = process.env.PORT || 8000;
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
	.then(async () => {
		const server = express();

		// TODO: DB init

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
