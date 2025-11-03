import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {type: String, require: true, trim: true},
    email: {type: String, require: true, trim: true, unique: true, lowercase},
    password: { type: String, require: true, minlenght: 8}
}, {timestamps: true});

export default mongoose.model('User', UserSchema);