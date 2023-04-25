const express = require('express')
const dotenv = require('dotenv')
const morgan = require ('morgan')
const bodyparser = require('body-parser')
const path = require('path')
const router = express.Router();
const app = express();
const mongoose = require("mongoose");

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080


//log requests
app.use(morgan('tiny'))

//purse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set('view engine',"pug")
// app.set("views",path.resolve(__dirname,"views"))

//declaring routes constants
const homepageRoutes = require("./routes/homepageRoutes")
const loginRoutes = require("./routes/loginRoutes")
const registerRoutes = require("./routes/registerRoutes")
const ao_registerRoutes = require("./routes/ao_registerRoutes")



const config = require("./config/database")
//creating a connection between controller and db
mongoose.connect(config.database,{
  // useNew gets data then converts it to data that is understandable in backend
useNewUrlParser: true, 
useUnifiedTopology: true
})
const db = mongoose.connection
//checking if db has connected
db.once("open", ()=>{
  console.log("connected to db")
})
db.on("error",(err)=>{
console.error(err )
})


//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css/custom.css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/custom-js")))
//css/custom_css










//Mounting routes middleware
app.use("/",homepageRoutes)
app.use("/",loginRoutes)
app.use("/",registerRoutes)
app.use("/",ao_registerRoutes)



//this is what shows that a page doesn't exist
app.get("*", (req,res)=>{
    res.status(404).send("Page does not exist")
  }) 
app.listen(PORT, ()=>{console.log('Server is running on http://localhost:'+(PORT))});