import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import productRoutes from './routes/productRoutes';
import router from './routes';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('/api', router);

export default app;