const express = require('express');
const registrationControler = require('../controllers/registrationController');
const loginController = require('../controllers/loginController');
const profileControler = require('../controllers/profileController');
const todoController = require('../controllers/todoController');
const authVerifyMiddleware = require('../middlewares/authVerifyMiddleware');
const {readTodoByDate} = require("../controllers/todoController");

const router = express.Router();


router.post('/userRegistration', registrationControler.userRegistration);
router.post('/userLogin', loginController.userLogin);

router.get('/userProfile', authVerifyMiddleware, profileControler.userProfile);
router.post('/updateProfile', authVerifyMiddleware, profileControler.updateProfile);

router.post('/createTodo', authVerifyMiddleware, todoController.createTodo);
router.get('/readTodo', authVerifyMiddleware, todoController.readTodo);
router.post('/updateTodo', authVerifyMiddleware, todoController.updateTodo);
router.post('/readTodoByStatus', authVerifyMiddleware, todoController.readTodoByStatus);
router.post('/readTodoByDate', authVerifyMiddleware, todoController.readTodoByDate);



module.exports = router;