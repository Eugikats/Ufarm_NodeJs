const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose")

const uf_registerSchema = new mongoose.Schema({
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
    gender:{
        type:String,
        trim:true
    },
    dob:{
        type:Date,
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
    phonenumber:{
        type:String,
        trim:true,
        unique:true,
    },
    nin:{
        type:String,
        unique:true,
    }, 
    role:{
        type:String,
    },
    uniquenumber:{
        type:String,
        trim:true,
        unique:true,
    },
    password:{
        type:String,
        trim:true
    },

})

uf_registerSchema.plugin(passportLocalMongoose, {usernameField: "uniquenumber"})
module.exports = mongoose.model("Uf_register", uf_registerSchema)