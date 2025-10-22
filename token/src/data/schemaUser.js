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
    }
})
 module.exports  = mongoose.model( "User", UserSchema);
