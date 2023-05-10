const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose")

const fo_registerSchema = new mongoose.Schema({
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
    ward:{
        type:String,
        trim:true
    },
    activities:{
        type:String,
        trim:true
    },
    gender:{
        type:String,
        trim:true
    },
    dob:{
        type:Date,
        trim:true
    },
    uniquenumber:{
        type:String,
        trim:true,
        unique:true,
    },
    phonenumber:{
        type:String,
        trim:true,
        unique:true,
    },
    address:{
        type:String,
        trim:true
    },
    residencetype:{
        type:String,
        trim:true
    },
    yor:{
        type:Number,
        trim:true
    },
    role:{
        type:String,
        trim:true
    },
    password:{
        type:String,
        trim:true
    },

})
fo_registerSchema.plugin(passportLocalMongoose, {usernameField: "uniquenumber"})
module.exports = mongoose.model("Fo_register", fo_registerSchema)