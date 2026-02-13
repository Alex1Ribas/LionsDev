const User = require('../data/schemaUser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function Register(req, res) {
    try {
        const { name, email, password, role } = req.body;

        if (!name || !email || !password) {
            return res.status(400).send({ message: "The fields: name, email and password are required" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({ 
            name, 
            email, 
            role: role || 'USER', 
            password: hashedPassword 
        });
        
        const payload = { userId: newUser._id, email: newUser.email, role: newUser.role };

        const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '7d' });
        return res.status(201).json({ message: "User created successfully", newUser: newUser, token: token });

    } catch (error) {
        console.error('Error creating user:', error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { Register };
