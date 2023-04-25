const express = require('express');
const router = express.Router();
const Ao_register = require('../models/ao_registerModel'); 


router.get("/ao_register",(req,res)=>{
    res.render("ao_register")
  })


router.post('/ao_register', async(req,res)=>{
    try{
        const ao_register = new Ao_register(req.body);
        await ao_register.save()
        res.redirect('/')
        console.log(req.body)
    }
    catch(err){
       console.log(err)
    }
})

// node sees files as modules
module.exports = router
