const express = require('express');

// import profile controller
const profileController = require('../controllers/profileController');
// import loginController
const loginController = require('../controllers/loginController');
// impost todoListController
const todoListController = require('../controllers/todoListController');

// import Auth Verification Middleware
const authVerifyMiddleware = require('../middlewares/authVerifyMiddleware');

const router = express.Router();


// Create Profile Api
router.post('/createProfile', profileController.createProfile);
// User Login Api
router.post('/userLogin', loginController.userLogin);

// Select Profile Api
router.get('/selectProfile', authVerifyMiddleware, profileController.selectProfile);
// Update Profile Api
router.post('/updateProfile', authVerifyMiddleware, profileController.updateProfile);

// Create ToDoList Api
router.post('/createToDoList', authVerifyMiddleware, todoListController.createToDoList);


// export router to use on app.js
module.exports = router;