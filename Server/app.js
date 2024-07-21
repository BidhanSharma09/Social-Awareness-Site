const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000

require('dotenv').config()


const corsOptions = {
    origin: '*', // Allow all origins. Modify this to restrict access to specific origins.
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
  };


app.use(cors(corsOptions));  


const { connectDatabase } = require("./dbConfig/database")
connectDatabase()

app.use(express.json()); //parse incoming json data
app.use(express.urlencoded({extended:true})) //parse incoming url-encoded data


//importing user model
const authRoute = require("./route/authRoute")

app.use("/api",authRoute);

app.get("/",(req,res)=>{
    res.status(200).json({
        "message":"hello world"
    })
})



app.listen(port,()=>{
    console.log("Nodejs project has started at port 5000");
})
