const express=require('express');
const UserController = require('../controller/UserController');
const router=express.Router();
router.post('/user',UserController.createUser)
 

module.exports=router;
