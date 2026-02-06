const express = require('express');
const UserRegisterController = require('../controllers/UserRegistrationController');
const UserLoginController = require('../controllers/UserLoginController');
const TaskController = require('../controllers/TaskController');

const AuthVerifyMiddleware = require('../middlewares/AuthVerifyMiddleware');

const router = express.Router();


router.post('/userRegistration', UserRegisterController.userRegistration);
router.post('/userLogin', UserLoginController.userLogin);

router.post('/createTask', AuthVerifyMiddleware, TaskController.createTask);
router.get('/readTask', AuthVerifyMiddleware, TaskController.readTask);
router.post('/updateTask', AuthVerifyMiddleware, TaskController.updateTask);
router.post('/deleteTask', AuthVerifyMiddleware, TaskController.deleteTask);







module.exports = router;