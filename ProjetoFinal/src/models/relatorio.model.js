import mongoose from "mongoose";

const RelatorioSchema = new mongoose.Schema(
  {
    user:     {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    tipo: {
    type: String, enum: ["Receita", "Despesa", "Lucro"], required: true,
   },
    dataInicio:{type: String, require: true, trim: true },
    dataFinal: {type: String, require: true, trim: true },
    resultados:{type: []},
  }, { timestamps: true }
);

export default mongoose.model("Relatorio", RelatorioSchema);
