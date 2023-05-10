const express = require('express');
const router = express.Router();
const Customer_register = require('../models/customer_registerModel'); 
const passport = require('passport');
// const Fo_register = require('../models/fo_registerModel'); 


router.get("/customer_login",(req,res)=>{
    res.render("customer_login")
  })

  router.post("/customer_login",passport.authenticate("local", {failureRedirect: "/customer_login"}), async(req,res)=>{
    req.session.user=req.user
    let userExist = await Customer_register.findOne({
        username: req.user.email,password:req.user.password
    });
    console.log("this user exists",userExist)
    console.log("this is the user session", req.session)
    res.redirect("/")
    
  })

  router.post("/customer_logout", (req,res)=>{
    if(req.session){
    //logs out the user
      req.session.destroy((error)=>{
        if(error){
        res.status(400).send("Unable to logout user")
      }else{
        return res.redirect("/customer_login")
      }
    })
  }
  })

  module.exports= router