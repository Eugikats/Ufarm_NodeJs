const mongoose = require ("mongoose")

const productSchema = new mongoose.Schema({
    productimage:{
        type:String,
    },
    productname:{
        type:String,
        trim:true
    },
    ward:{
        type:String,
        trim:true
    },
    uploaddate:{
        type:Date,
    },
    unitprice:{
        type:Number,
    },
    unit:{
        type:String,
    }
    ,
    quantity:{
        type:Number,
    },
    modeofpayment:{
        type:String,
        trim:true
    },
    modeofdelivery:{
        type:String,
        trim:true
    },
    farmdirections:{
        type:String,
        trim:true
    },
    producetype:{
        type:String,
        trim:true
    },
})
//schema can be any name
module.exports = mongoose.model("Products",productSchema)