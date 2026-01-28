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

// Create TodoList Api
router.post('/createToDoList', authVerifyMiddleware, todoListController.createToDoList);
// Select TodoList Api
router.get('/selectToDoList', authVerifyMiddleware, todoListController.selectToDoList);
// Update TodoList Api
router.post('/updateTodoList', authVerifyMiddleware, todoListController.updateTodoList);




// export router to use on app.js
module.exports = router;