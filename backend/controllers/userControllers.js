const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

// @desc Register new User
// @route POST /api/users
// @access Public

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error('Please give all the details');
    }

    // Check if user already exsist
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        console.log(userExists);
        throw new Error('User already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        name,
        email,
        password: hashPassword
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // is this required
            token:generateToken(user._id)
        });
    }else{
        res.status(400);
        throw new Error('Invalid user data');
    }
});

// @desc    Authenticate a user
// @route   POST /api/user/login
// @access  Public

const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email});

    if( user && (await bcrypt.compare(password, user.password) ) ){
        res.json({
            id: user._id,
            name: user.name,
            email: user.email,
            token:generateToken(user._id)
        });
    }else{
        res.status(400);
        throw new Error('Invalid creadtionals');
    }
});

// @desc    Get user data
// @route   GET /api/user/me
// @access  Private

const getMe = asyncHandler(async (req, res) => {
    const {_id,name,email} = req.user;
    res.json({_id,name,email});
});

const generateToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d'
    })
}

module.exports = { registerUser, loginUser, getMe }