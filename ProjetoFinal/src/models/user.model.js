import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name:    {type: String, require:true, trim: true},
    email:   {type: String, require:true, trim: true, unique: true, lowerase: true},
    password:{type: String, require:true, select: false },
    confPassword:{type: String, require:true, select: false },
    Role:    {type: String, enum: ["ADMIN", "USER"], default: "ADMIN"}
}, {timestamps: true});

export default mongoose.model('User', UserSchema);