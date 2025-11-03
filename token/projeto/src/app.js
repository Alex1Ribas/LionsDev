import express from 'express';
import userRouter from './routes/user.routes'
import { errorMiddleware } from './middlewares/error.middleware';

const app = express();
app.use(express.json());

app.use('/api', userRouter)

app.use(errorMiddleware)

export default app;