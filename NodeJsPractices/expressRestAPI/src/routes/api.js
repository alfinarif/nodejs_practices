const express = require('express');

const HelloController = require('../controllers/HelloController');

const router = express.Router();

// this is my first routing
router.get('/hello-get', HelloController.HelloGet);
router.post('/hello-post', HelloController.HelloPost);
router.get('/alfinarif', HelloController.AlfinArif);





module.exports = router;

