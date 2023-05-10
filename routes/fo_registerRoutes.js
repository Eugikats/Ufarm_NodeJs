const express = require('express');
const router = express.Router();
const connectEnsureLogin = require('connect-ensure-login');
const Fo_register = require('../models/fo_registerModel'); 
const Uf_register = require('../models/uf_registerModel'); 
const Products = require("../models/productModel");

router.get("/fo_register",(req,res)=>{
    res.render("fo_register")
  })


router.post('/fo_register', async(req,res)=>{
    try{
        const fo_register = new Fo_register(req.body);
        let uniquenumber = await Fo_register.findOne({uniquenumber: req.body.uniquenumber})
        if(uniquenumber){
            return res.send("This uniquenumber already exists")
        }
        else{
            //it is .register not .save() beacause .register is for people who will login later
            // req.body.register is what encrypts the password in the database
            await Fo_register.register(fo_register, req.body.password,(error)=>{
                if(error){
                    throw error
                    //console.log(error) same thing
                }
                res.redirect('/fo_dash')
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

router.get("/fo_dash", async(req,res)=>{
    try{
        let ufitems = await Uf_register.find();
        // console.log(foitems)
        res.render("fo_dash",{ufs:ufitems})
    }
    catch(err){
        console.log(err)
        res.send("Failed to retrive uf details")
    }
   
})

router.get("/fo_products_dash", async (req,res)=>{
    try{
        const products = await Products.find()
        // console.log(products)
        res.render("fo_products_dash", {data:products})
    }
    catch (error) {
        res.send("Can't get image")
    }
});   

//editing fields
router.get("/uf_edit/:id",async(req,res)=>{
    try{
        const ufitem = await Uf_register.findOne({_id:req.params.id});
        res.render("uf_edit",{uf:ufitem});
    }
    catch(err){
        res.send("Could not find Uf");
        console.log(err);
    }
});

router.post("/uf_edit", async(req,res)=>{
    try{
        await Uf_register.findOneAndUpdate({_id:req.query.id},req.body)
        res.redirect("/fo_dash")
    }
    catch(err){
        res.send("Could not update uf details")
        console.log(err)
    }
})

// node sees files as modules
module.exports = router
