const express = require('express');
const router = express.Router();
const connectEnsureLogin = require('connect-ensure-login');
const Ao_register = require('../models/ao_registerModel'); 
const Fo_register = require('../models/fo_registerModel'); 


router.get("/ao_register",(req,res)=>{
    res.render("ao_register")
  })


router.post('/ao_register', async(req,res)=>{
    console.log(req.body)
    try{
        const ao_register = new Ao_register(req.body);
        let Email = await Ao_register.findOne({email: req.body.email})
        if(Email){
            return res.send("This email already exists")
        }
        else{
            //it is .register not .save() beacause .register is for people who will login later
            // req.body.register is what encrypts the password in the database
            await Ao_register.register(ao_register, req.body.password,(error)=>{
                if(error){
                    throw error
                    //console.log(error) same thing
                }
                res.redirect('/ao_dash')
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

router.get("/ao_dash", connectEnsureLogin.ensureLoggedIn(), async(req,res)=>{
    try{
        let foitems = await Fo_register.find();
        // console.log(foitems)
        res.render("ao_dash",{fos:foitems})
    }
    catch(err){
        console.log(err)
        res.send("Failed to retrive fo details")
    }
   
})
 

//editing fields
router.get("/fo_edit/:id",async(req,res)=>{
    try{
        const foitem = await Fo_register.findOne({_id:req.params.id});
        res.render("fo_edit",{fo:foitem});
    }
    catch(err){
        res.send("Could not find fo");
        console.log(err);
    }
});

router.post("/fo_edit", async(req,res)=>{
    try{
        await Fo_register.findOneAndUpdate({_id:req.query.id},req.body)
        res.redirect("/ao_dash")
    }
    catch(err){
        res.send("Could not update fo details")
        console.log(err)
    }
})



// node sees files as modules
module.exports = router
