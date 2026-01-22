const express = require('express');

const HelloController = require('../controllers/HelloController');
const studentsController = require('../controllers/studentsController');

const router = express.Router();

// this is my first routing
router.get('/hello-get', HelloController.HelloGet);
router.post('/hello-post', HelloController.HelloPost);
router.get('/alfinarif', HelloController.AlfinArif);

// mongoose
router.post('/insertStudents', studentsController.inserStudents);
router.get('/readStudents', studentsController.readStudents);
router.post('/updateStudents/:id', studentsController.updateStudents);



module.exports = router;

