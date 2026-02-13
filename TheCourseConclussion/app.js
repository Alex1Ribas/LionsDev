import express from "express";
import userRouter from "./src/routes/user.routes.js";
import incomeRouter from "./src/routes/income.routes.js";
import expenseRouter from "./src/routes/expense.routes.js"
import reportRouter from "./src/routes/report.routes.js";
import errorMiddleware from "./src/middlewares/error.middleware.js";

const app = express();
app.use(express.json());

app.use("/api", userRouter);
app.use("/api", incomeRouter);
app.use("/api", expenseRouter);
app.use("/api", reportRouter);

app.use(errorMiddleware);

export default app;