const express = require('express');
const router = express.Router();

router.get("/register",(req,res)=>{
    res.render("register")
  })






  // node sees files as modules
  module.exports = router