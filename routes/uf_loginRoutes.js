const express = require('express');
const router = express.Router();
const Uf_register = require('../models/uf_registerModel'); 
const passport = require('passport');
// const Fo_register = require('../models/fo_registerModel'); 


router.get("/uf_login",(req,res)=>{
    res.render("uf_login")
  })

  router.post("/uf_login",passport.authenticate("local", {failureRedirect: "/uf_login"}), async(req,res)=>{
    req.session.user=req.user
    let userExist = await Uf_register.findOne({
        username: req.user.uniquenumber,password:req.user.password
    });
    console.log("this user exists",userExist)
    console.log("this is the user session", req.session)
    res.redirect("/uf_dash")
    
  })

  router.post("/uf_logout", (req,res)=>{
    if(req.session){
    //logs out the user
      req.session.destroy((error)=>{
        if(error){
        res.status(400).send("Unable to logout user")
      }else{
        return res.redirect("/uf_login")
      }
    })
  }
  })

  module.exports= router