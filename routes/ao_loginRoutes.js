const express = require('express');
const router = express.Router();
const passport = require('passport');
const Ao_register = require('../models/ao_registerModel'); 
const Fo_register = require('../models/fo_registerModel'); 
const Uf_register = require('../models/uf_registerModel'); 
const Customer_register = require('../models/customer_registerModel'); 

router.get("/ao_login",(req,res)=>{
    res.render("ao_login")
})

router.post("/ao_login", passport.authenticate("local", {failureRedirect: "/ao_login"}), async (req,res)=>{
    let role = req.user.role
    switch (role) {
        case "AO":
                return res.redirect("/ao_dash");
            break;
        case "UF":
                return res.redirect("/");
            
            break;
        case "FO":
                return res.redirect("/fo_dash");
            
            break;
        case "Customer":
                return res.redirect("/");
            break;
            default:
    res.send("You are not registered");
    }
});

router.post("/logout", (req,res)=>{
    if(req.session){
        //logs out the user
        req.session.destroy((error)=>{
            if(error){
                res.status(400).send("Unable to logout user")
            }else{
                return res.redirect("/ao_login")
            }
        })
    }
})

module.exports= router;
