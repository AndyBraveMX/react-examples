const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	googleId: String
});

//Create a new collection called users
mongoose.model('users', userSchema);