const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    id: { type: String, maxLength: 255 },
    firstName: { type: String, maxLength: 255  },
    lastName: { type: String, maxLength: 255 },
    email: { type: String, maxLength: 255 },
    address: { type: String, maxLength: 255 },
});

module.exports = mongoose.model('User', User);