import express, { Request, Response } from 'express';
import { Server } from 'socket.io';

const app = express();
const io = new Server();

app.get('/', (req: Request, res: Response) => {
	return res.send('ok2');
});

export default app;
