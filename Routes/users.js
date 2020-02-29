const express = require('express');
const router = express.Router();
const usersController = require("../Controllers/users");

router.post("/create",(req,res)=>{
  usersController.register_user(req.body,(ob)=>{
    return res.send(ob);
  });
});

router.post("/login",(req,res)=>{
  usersController.sign_in(req.body,(ob)=>{
    return res.send(ob);
  });
});
module.exports = router;
