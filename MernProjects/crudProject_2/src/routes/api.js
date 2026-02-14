const express = require('express');
const crudController = require('../controllers/crudController');

const router = express.Router();



router.post('/create', crudController.createTodo);






module.exports = router;