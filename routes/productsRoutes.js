const express = require('express');
const router = express.Router();
const Products = require("../models/productModel");
const connectEnsureLogin = require('connect-ensure-login');
const multer = require('multer');


router.get("/products", async (req,res)=>{
    try{
        const products = await Products.find()
        console.log(products)
        res.render("products", {data:products})
    }
    catch (error) {
        res.send("Can't get image")
    }
});   

router.get("/uf_dash", async (req,res)=>{
    try{
        const products = await Products.find()
        // console.log(products)
        res.render("uf_dash", {data:products})
    }
    catch (error) {
        res.send("Can't get image")
    }
});   

router.post("/products/delete",async(req,res)=>{
    try{
        //deleteOne is an inbuilt record
        await Products.deleteOne({_id:req.body.id})
        res.redirect("back")
    }
    catch(err){
        console.log(err)
    }
});

router.get("/product_edit/:id", async(req,res)=>{
    try{
        const productitem = await Products.findOne({_id:req.params.id});
        res.render("product_edit",{product:productitem});
    }
    catch(err){
        res.send("Could not find product")
        console.log(err)
    }
});
router.post("/product_edit", async(req,res)=>{
    try{
        await Products.findOneAndUpdate({_id:req.query.id},req.body)
        res.redirect("/uf_dash")
    }
    catch(err){
        res.send("Could not update product details")
        console.log(err)
    }
})

router.post("/logout", (req,res)=>{
    if(req.session){
      req.session.destroy((error)=>{
        if(error){
        res.status(400).send("Unable to logout user")
      }else{
        return res.redirect("/login")
      }
    })
  }
  })



  module.exports = router