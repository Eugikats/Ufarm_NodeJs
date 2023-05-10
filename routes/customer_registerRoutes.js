const express = require('express');
const router = express.Router();
const connectEnsureLogin = require
const Customer_register = require('../models/customer_registerModel'); 


router.get("/customer_register",(req,res)=>{
    res.render("customer_register")
  })


router.post('/customer_register', async(req,res)=>{
    console.log(req.body)
    try{
        const customer_register = new Customer_register(req.body);
        let Email = await Customer_register.findOne({email: req.body.email})
        if(Email){
            return res.send("This email already exists")
        }
        else{
            //it is .register not .save() beacause .register is for people who will login later
            // req.body.register is what encrypts the password in the database
            await Customer_register.register(customer_register, req.body.password,(error)=>{
                if(error){
                    throw error
                    //console.log(error) same thing
                }
                res.redirect('/products')
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
