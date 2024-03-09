const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const Users = require('../models/usersModel');


const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        res.status(400)
        res.json({ success: false, message: 'Please add all fields' });
    }

    // Check if user exists
    const userExists = await Users.findOne({ email })
    if (userExists) {
        res.status(400)
        res.json({ success: false, message: 'User already exists' });
    } else {
        // Hash Password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //Create user
        const user = await Users.create({
            name,
            email,
            password: hashedPassword
        })

        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id)
            })
        } else {
            res.status(400)
            res.json({ success: false, message: 'Invalid user data' });
        }
    }
});

const generateToken = (id) => {
    return jwt.sign({ id }, "mysceret", {
        expiresIn: '30d'
    })
}

module.exports = {
    registerUser,
}