const express = require('express');
const UserRegisterController = require('../controllers/UserRegistrationController');
const UserLoginController = require('../controllers/UserLoginController');

const router = express.Router();


router.post('/userRegistration', UserRegisterController.userRegistration);
router.post('/userLogin', UserLoginController.userLogin);







module.exports = router;