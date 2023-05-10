const express = require('express')
const dotenv = require('dotenv')
const morgan = require ('morgan')
const bodyparser = require('body-parser')
const path = require('path')
const router = express.Router();
const app = express();
const mongoose = require("mongoose");
const session = require('express-session')
const passport = require("passport")

const Ao_register = require('./models/ao_registerModel');
const Uf_register = require('./models/uf_registerModel'); 
const Fo_register = require('./models/fo_registerModel');
const Customer_register = require('./models/customer_registerModel'); 

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080


//log requests
app.use(morgan('tiny'))

//support parsing of application/json type of data
app.use(bodyparser.json());
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
const ao_loginRoutes = require("./routes/ao_loginRoutes")
const uf_registerRoutes = require("./routes/uf_registerRoutes")
// const uf_loginRoutes = require("./routes/uf_loginRoutes")
const fo_registerRoutes = require("./routes/fo_registerRoutes")
// const fo_loginRoutes = require("./routes/fo_loginRoutes")
const customer_registerRoutes = require("./routes/customer_registerRoutes")
// const customer_loginRoutes = require("./routes/customer_loginRoutes")
const product_uploadRoutes = require("./routes/product_uploadRoutes")
const productsRoutes = require("./routes/productsRoutes")
const orderRoutes = require("./routes/orderRoutes")



app.use(session({
  secret:"secret",
  // dont want browser to remember session after closure
  resave: false,
  // dont want browser to save what was done before logging in
  saveUninitialized:false
}))



// * Passport middleware
app.use(passport.initialize());
app.use(passport.session());
//AO passport
passport.use(Ao_register.createStrategy());
passport.serializeUser(Ao_register.serializeUser());
passport.deserializeUser(Ao_register.deserializeUser());
// //UF passport
// passport.use(Uf_register.createStrategy());
// passport.serializeUser(Uf_register.serializeUser());
// passport.deserializeUser(Uf_register.deserializeUser());
// //FO passport
// passport.use(Fo_register.createStrategy());
// passport.serializeUser(Fo_register.serializeUser());
// passport.deserializeUser(Fo_register.deserializeUser());
// //Customer passport
// passport.use(Customer_register.createStrategy());
// passport.serializeUser(Customer_register.serializeUser());
// passport.deserializeUser(Customer_register.deserializeUser());




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
app.use(express.static(path.join(__dirname,"/assets/img/products")))
app.use('/js',express.static(path.resolve(__dirname,"assets/custom-js")))
//css/custom_css





//Mounting routes middleware
app.use("/",homepageRoutes)
app.use("/",loginRoutes)
app.use("/",registerRoutes)
app.use("/",ao_registerRoutes)
app.use("/",ao_loginRoutes)
app.use("/",uf_registerRoutes)
// app.use("/",uf_loginRoutes)
app.use("/",fo_registerRoutes)
// app.use("/",fo_loginRoutes)
app.use("/",customer_registerRoutes)
// app.use("/",customer_loginRoutes)
app.use("/",product_uploadRoutes)
app.use("/",productsRoutes)
app.use("/",orderRoutes)




//this is what shows that a page doesn't exist
app.get("*", (req,res)=>{
    res.status(404).send("Page does not exist")
  }) 
app.listen(PORT, ()=>{console.log('Server is running on http://localhost:'+(PORT))});