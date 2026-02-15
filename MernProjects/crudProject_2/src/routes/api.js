const express = require('express');
const crudController = require('../controllers/crudController');

const router = express.Router();



router.post('/createTodo', crudController.createTodo);
router.get('/readTodo', crudController.readTodo);
router.post('/updateTodo/:id', crudController.updateTodo);
router.get('/deleteTodo/:id', crudController.deleteTodo);






module.exports = router;