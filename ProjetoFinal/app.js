import express from "express";
import userRouter from "./src/routes/user.routes.js";
import receitaRouter from "./src/routes/receita.routes.js";
import despesaRouter from "./src/routes/despesa.routes.js";
import relatorioRouter from "./src/routes/relatorio.routes.js";
import errorMiddleware from "./src/middlewares/error.middleware.js";

const app = express();
app.use(express.json());

app.use("/api", userRouter);
app.use("/api", receitaRouter);
app.use("/api", despesaRouter);
app.use("/api", relatorioRouter);

app.use(errorMiddleware);

export default app;
