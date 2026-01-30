const express = require('express');
const registrationControler = require('../controllers/registrationController');
const loginController = require('../controllers/loginController');
const profileControler = require('../controllers/profileController');

const authVerifyMiddleware = require('../middlewares/authVerifyMiddleware');

const router = express.Router();


router.post('/userRegistration', registrationControler.userRegistration);
router.post('/userLogin', loginController.userLogin);

router.get('/userProfile', authVerifyMiddleware, profileControler.userProfile);
router.post('/updateProfile', authVerifyMiddleware, profileControler.updateProfile);





module.exports = router;