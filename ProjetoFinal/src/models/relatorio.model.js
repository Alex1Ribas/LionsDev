import mongoose from "mongoose";

const relatorioSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    receitas: [{ type: mongoose.Schema.Types.ObjectId, ref: "Receita" }],
    despesas: [{ type: mongoose.Schema.Types.ObjectId, ref: "Despesa" }],
    periodoInicio: { type: String, require: true, trim: true },
    periodoFim: { type: String, require: true, trim: true },
  },
  { timestamps: true }
);

export default mongoose.model("Relatorio", relatorioSchema);
