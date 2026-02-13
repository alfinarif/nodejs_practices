const express = require('express');
const crudController = require('../controllers/crudController');

const router = express.Router();


router.get('/create', crudController.createTodo);





module.exports = router;