// const mongoose = require('mongoose');

// // Define the user schema
// const userSchema = new mongoose.Schema({
//   // Implement the user schema fields:
//   // name as String and
//   // email as a String,
// });

const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Makes the "name" field mandatory
  },
  email: {
    type: String,
    required: true, // Makes the "email" field mandatory
    unique: true, // Ensures that each email is unique
    trim: true, // Removes leading and trailing whitespaces from the email
    lowercase: true, // Converts the email to lowercase
  },
  // You can add more fields as needed
  // For example:
  age: {
    type: Number,
    default: 18, // Sets a default value for the age field
  },
  createdAt: {
    type: Date,
    default: Date.now, // Sets the default value to the current timestamp
  },
});

// Create and export the User model
const User = mongoose.model('User', userSchema);
module.exports = User;


