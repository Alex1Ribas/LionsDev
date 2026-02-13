import express from 'express';
import userRouter from './src/routes/user.routes.js'
import errorMiddleware from './src/middlewares/errorMiddleware.js';

const app = express();
app.use(express.json());

app.use('/api', userRouter)

app.use(errorMiddleware)

export default app;