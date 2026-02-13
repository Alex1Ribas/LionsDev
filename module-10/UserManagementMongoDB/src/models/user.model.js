import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {type: String, require: true, trim: true},
    email: {type: String, require: true, trim: true, unique: true, lowerCase: true},
    password: { type: String, required: true, select: false },  
    role: {type: String, enum: ["ADMIN", "USER"], default: "USER"}
}, {timestamps: true});

export default mongoose.model('User', userSchema);