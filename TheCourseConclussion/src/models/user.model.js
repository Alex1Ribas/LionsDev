import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name:         { type: String, required: true, trim: true },
    email:        { type: String, required: true, trim: true, unique: true, lowercase: true },
    password:     { type: String, required: true, select: false },
    confPassword: { type: String, required: true, select: false },
    role:         { type: String, enum: ["ADMIN", "USER"], default: "ADMIN" }
}, { timestamps: true });

export default mongoose.model('User', UserSchema);
