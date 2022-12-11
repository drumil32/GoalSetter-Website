const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "please give your name"]
        },
        email: {
            type: String,
            required: [true, "please give your email"]
        },
        password: {
            type: String,
            required: [true, "please give your password"]
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('User',userSchema);