// Import Modules
const mongoose = require('mongoose');

// Define the schema for the user model
const subscriberSchema = new mongoose.Schema({
    username: {
        type: String,
        // required: true,
    },
    userid: {
        type: Number,
        required: true,
        unique: [true, 'User already exists'],
    },
    city: {
        type: String,
        // required: true,
    },
    time: {
        type: Date,
        default: Date.now,
    },
});

// Create the user model
const Subsciber = mongoose.model('Subsciber', subscriberSchema);

// Export the user model
module.exports = Subsciber;
