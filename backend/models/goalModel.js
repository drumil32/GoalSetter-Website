const mongoose = require('mongoose');

const goalSchema = mongoose.Schema(
    {
        // here we want to add foregine key of user :-
        // In Order, to know that which user's goal is this
        // as a foregine key we are using user's object's objectId
        user: {
            // we are giving type of foregine key 
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            // ref:'User' this allows user field to work as foregine key
            ref: 'User'
        },
        text: {
            type: String,
            required: [true, 'Please add a text value']
        }
    },
    {
        // here it will add creation timestamps and updation timestamps
        timestamps: true,
    }
);

module.exports = mongoose.model('Goal', goalSchema);