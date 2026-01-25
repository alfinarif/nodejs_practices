const express = require('express');

const HelloController = require('../controllers/HelloController');
const studentsController = require('../controllers/studentsController');

// JWTPractice module only for practices
const JWTPractice = require('../controllers/JWTPractice');

// import tokenIssueController
const tokenIssueController = require('../controllers/tokenIssueController');
// import token verify middleware
const tokenVerifyMiddleware = require('../middleware/tokenVerifyMiddleware');


const router = express.Router();

// this is my first routing
// router.get('/hello-get', HelloController.HelloGet);
// router.post('/hello-post', HelloController.HelloPost);
// router.get('/alfinarif', HelloController.AlfinArif);



// mongoose CRUD api and on those routes we will apply JWT Auth
router.get('/tokenIssue', tokenIssueController.tokenIssue);
router.post('/insertStudents', tokenVerifyMiddleware, studentsController.inserStudents);
router.get('/readStudents', tokenVerifyMiddleware, studentsController.readStudents);
router.post('/updateStudents/:id', tokenVerifyMiddleware, studentsController.updateStudents);
router.get('/deleteStudents/:id', tokenVerifyMiddleware, studentsController.deleteStudents);




// jwt practice encode & decode route
router.get('/createToken', JWTPractice.CreateToken);
router.get('/decodeToken', JWTPractice.DecodeToken);


module.exports = router;

