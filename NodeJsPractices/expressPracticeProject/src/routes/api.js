const express = require('express');

// import profile controller
const profileController = require('../controllers/profileController');
// import loginController
const loginController = require('../controllers/loginController');
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




// export router to use on app.js
module.exports = router;