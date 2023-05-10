const express = require('express');
const router = express.Router();
const connectEnsureLogin = require('connect-ensure-login');
const Uf_register = require('../models/uf_registerModel'); 


router.get("/uf_register",(req,res)=>{
    res.render("uf_register")
  })


router.post('/uf_register', async(req,res)=>{
    try{
        const uf_register = new Uf_register(req.body);
        let uniquenumber = await Uf_register.findOne({uniquenumber: req.body.uniquenumber})
        if(uniquenumber){
            return res.send("This uniquenumber already exists")
        }
        else{
            //it is .register not .save() beacause .register is for people who will login later
            // req.body.register is what encrypts the password in the database
            await Uf_register.register(uf_register, req.body.password,(error)=>{
                if(error){
                    throw error
                    //console.log(error) same thing
                }
                res.redirect('/uf_dash')
            })
        // await ao_register.save()
        // console.log(req.body)
        }
    }
    catch(err){
        res.status(400).send("Sorry there is trouble accessing this page")
       console.log(err)
    }
})

// node sees files as modules
module.exports = router
