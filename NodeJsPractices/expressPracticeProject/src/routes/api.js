const express = require('express');

// import profile controller
const profileController = require('../controllers/profileController');


const router = express.Router();


// create profile api
router.post('/createProfile', profileController.createProfile);






// export router to use on app.js
module.exports = router;