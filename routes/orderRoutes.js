const express = require('express');
const router = express.Router();
const Products = require("../models/productModel");
const orderModel = require('../models/orderModel');

router.get("/mailin/:id", async (req,res)=>{
    try{
        const productitem = await Products.findOne({_id:req.params.id});
        res.render("mailin_order",{product:productitem});
    }
    catch (error) {
        res.send("Can't get image")
        console.log(err)
    }
});

router.post("/order", (req,res)=>{
    console.log(req.body)
    // res.render("products")
    try{
      console.log(req.body)
      const order = new orderModel(req.body)
      order.save()
      res.redirect("/products")
    } catch (error) {
        res.send(`upload failed ${error}`)
    }
  });

  router.get("/order_dash", async (req,res)=>{
    try{
        const orders = await orderModel.find()
        // console.log(products)
        res.render("order_dash", {orders:orders})
    }
    catch (error) {
        res.send("Can't get orders")
    }
});   

  router.post("/orders/delete",async(req,res)=>{
    try{
        //deleteOne is an inbuilt record
        await orderModel.deleteOne({_id:req.body.id})
        res.redirect("back")
    }
    catch(err){
        console.log(err)
    }
});

module.exports = router;
