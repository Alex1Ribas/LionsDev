const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome:{
        type: String,
        require: true,
        trim: true
    },
    email:{
        type: String,
        require: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    senha: {
        type: String,
        require: true,
        minlength: 8
    },
    Roule:{
        type: [String],
        enum: ['USER', 'ADMIN'],
        default: 'USER',
        require: true
    }
})
 module.exports  = mongoose.model( "User", UserSchema);
