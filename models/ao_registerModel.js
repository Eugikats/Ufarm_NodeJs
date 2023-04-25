const mongoose = require('mongoose');

const ao_registerSchema = new mongoose.Schema({
    firstname:{
        type:String,
        trim:true
    },
    lastname:{
        type:String,
        trim:true
    },
    othernames:{
        type:String,
        trim:true
    },
    phone:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        trim:true
    },
    address:{
        type:String,
        trim:true
    },
    password:{
        type:String,
    },
    gender:{
        type:String,
        trim:true
    },
    
})

module.exports = mongoose.model("Ao_register", ao_registerSchema)
