const express = require('express');

// import profile controller
const profileController = require('../controllers/profileController');
// import loginController
const loginController = require('../controllers/loginController');
// import Auth Verification Middleware
const authVerifyMiddleware = require('../middlewares/authVerifyMiddleware');

const router = express.Router();


// create profile api
router.post('/createProfile', profileController.createProfile);
// user login api
router.post('/userLogin', loginController.userLogin);





// export router to use on app.js
module.exports = router;