import mongoose from 'mongoose';

const ExpenseSchema = new mongoose.Schema({
    user:         { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    exitDate:     { type: String, required: true }, 
    value:        { type: Number, required: true, trim: true },
    recipient:    { type: String, required: true, trim: true },
    description:  { type: String, required: true, trim: true },
    status:       { type: String, required: true, enum: [
        "Active", "Overdue", "Paid" 
    ]},
    method:       { type: String, required: true, enum: [
        "CASH", "PIX", "CREDIT CARD", "DEBIT CARD", "TRANSFER", "BANK SLIP"
    ]},  
}, { timestamps: true });

export default mongoose.model('Expense', ExpenseSchema);
