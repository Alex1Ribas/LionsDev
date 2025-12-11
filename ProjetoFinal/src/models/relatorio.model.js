import mongoose from "mongoose";

const RelatorioSchema = new mongoose.Schema(
  {
    periodoInicio:{type: String, require: true, trim: true },
    periodoFim:   {type: String, require: true, trim: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    tipo: {
      enum: [
        { type: mongoose.Schema.Types.ObjectId, ref: "Receita" },
        { type: mongoose.Schema.Types.ObjectId, ref: "Despesa" },
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Relatorio", RelatorioSchema);
