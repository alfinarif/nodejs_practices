const express = require('express');
const registrationControler = require('../controllers/registrationController');
const loginController = require('../controllers/loginController');
const profileControler = require('../controllers/profileController');
const todoController = require('../controllers/todoController');
const authVerifyMiddleware = require('../middlewares/authVerifyMiddleware');

const router = express.Router();


router.post('/userRegistration', registrationControler.userRegistration);
router.post('/userLogin', loginController.userLogin);

router.get('/userProfile', authVerifyMiddleware, profileControler.userProfile);
router.post('/updateProfile', authVerifyMiddleware, profileControler.updateProfile);

router.post('/createTodo', authVerifyMiddleware, todoController.createTodo);



module.exports = router;