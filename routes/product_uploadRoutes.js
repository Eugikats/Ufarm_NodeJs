const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")
const Products = require("../models/productModel");
const multer = require('multer');

//you define where the image is stored
let storage = multer.diskStorage({
    destination:(req,file,cb)=>{cb(null,"assets/img/products")}, filename:(req,file,cb)=>{cb(null,file.originalname)}})
    //creating a multer instance
let imageupload = multer({storage:storage})
// imported model
router.get("/product_upload", async (req,res)=>{
    res.render("product_upload")
  });
  //you can intercept the multer method here
router.post("/product_upload", imageupload.single("productimage"), (req,res)=>{
    console.log(req.file)
    // res.render("products")
    try{
      console.log(req.body)
      const products = new Products(req.body)
      products.productimage=req.file.originalname
      products.save()
      res.redirect("/uf_dash")
    } catch (error) {
        res.send(`upload failed ${error}`)
    }
  });



  module.exports = router