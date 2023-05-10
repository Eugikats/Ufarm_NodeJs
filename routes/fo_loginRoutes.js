const express = require('express');
const router = express.Router();
const Fo_register = require('../models/fo_registerModel'); 
const passport = require('passport');
// const Fo_register = require('../models/fo_registerModel'); 


router.get("/fo_login",(req,res)=>{
    res.render("fo_login")
  })

  router.post("/fo_login",passport.authenticate("local", {failureRedirect: "/fo_login"}), async(req,res)=>{
    req.session.user=req.user
    let userExist = await Fo_register.findOne({
        username: req.user.uniquenumber,password:req.user.password
    });
    console.log("this user exists",userExist)
    console.log("this is the user session", req.session)
    res.redirect("/fo_dash")
    
  })

  router.post("/fo_logout", (req,res)=>{
    if(req.session){
    //logs out the user
      req.session.destroy((error)=>{
        if(error){
        res.status(400).send("Unable to logout user")
      }else{
        return res.redirect("/fo_login")
      }
    })
  }
  })

  module.exports= router