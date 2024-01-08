// Create a new user
const express = require('express');
const router = express.Router();
const User = require('../model/userModel');

// Create a new user
router.post('/users', async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = await User.create({ name, email });

    res.status(201).json({
      status: 201,
      message: 'User created',
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Internal server error',
      error: error.message,
    });
  }
});

// Retrieve a user by ID
router.get('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (user) {
      res.status(200).json({
        status: 200,
        message: 'Profile data',
        data: user,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: 'User not found',
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Internal server error',
      error: error.message,
    });
  }
});

// Update a user by ID
router.patch('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUserData = req.body;
    const updatedUser = await User.findByIdAndUpdate(userId, updatedUserData, {
      new: true,
    });

    if (updatedUser) {
      res.status(200).json({
        status: 200,
        message: 'User updated',
        data: updatedUser,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: 'User not found',
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Internal server error',
      error: error.message,
    });
  }
});

// Delete a user by ID
router.delete('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);

    if (deletedUser) {
      res.status(200).json({
        status: 200,
        message: 'User deleted',
      });
    } else {
      res.status(404).json({
        status: 404,
        message: 'User not found',
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Internal server error',
      error: error.message,
    });
  }
});

module.exports = router;
