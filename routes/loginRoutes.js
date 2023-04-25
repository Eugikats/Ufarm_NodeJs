const express = require('express');
const router = express.Router();

router.get("/login",(req,res)=>{
    res.render("login")
  })






  // node sees files as modules
  module.exports = router