import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        rquire: true,
        trim: true
    },
    email:{
        type: String,
        require: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    senha: {
        type: String,
        require: true,
        minlength: 8
    },
    Roule: {
        type: [String],
        enum: ["ADMIN", "USER"],
        default: "USER",
        rquire: true
    }
});

export const User = mongoose.model("User", UserSchema);