const User = require('../data/schemaUser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function Login(req, res) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "The fields 'email' and 'password' are required." });
        }

        const userFound = await User.findOne({ email });
        
        if (!userFound) {
            return res.status(401).send({ message: "Invalid email or password!" });
        }

        const isPasswordValid = await bcrypt.compare(password, userFound.password);
        
        if (!isPasswordValid) {
            return res.status(401).send({ message: "Invalid email or password!" });
        }

        const token = jwt.sign(
            { id: userFound._id, email: userFound.email, role: userFound.role }, 
            process.env.ACCESS_TOKEN_SECRET, 
            { expiresIn: '7d' }
        );
        
        return res.status(200).send({ message: "Login successful!", token: token });

    } catch (error) {
        console.error("Error during login!", error.message);
        return res.status(500).send({ message: "Internal server error" });
    }
}

module.exports = { Login };
