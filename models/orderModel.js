const mongoose = require ("mongoose")

const orderSchema = new mongoose.Schema({
    productName:{
        type:String,
    },
    productPrice:{
        type:Number,
    },
    quantity:{
        type:Number,
    },
    totalPrice:{
        type:Number,
    },
    buyerName:{
        type:String,
    },
    buyerLocation:{
        type:String,
    },
})
//schema can be any name
module.exports = mongoose.model("Orders",orderSchema)