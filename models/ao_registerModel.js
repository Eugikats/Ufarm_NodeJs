const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose")

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
        trim:true,
        unique:true,
    },
    email:{
        type:String,
        trim:true,
        unique:true,
    },
    dob:{
        type:Date,
        trim:true
    },
    address:{
        type:String,
        trim:true
    },
    password:{
        type:String,
    },
    role:{
        type:String,
        trim:true
    },
    gender:{
        type:String,
        trim:true
    },
    
})

//userNamefield is the default thats why its good to change it to the other field
ao_registerSchema.plugin(passportLocalMongoose, {usernameField: "email"})
module.exports = mongoose.model("Ao_register", ao_registerSchema)
