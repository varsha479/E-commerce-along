const express=require("express");
const app=express();
const ErrorHandler= require("./middleware/error");
const cookieParser =require("cookie-parser");
const bodyParser =require("body-parser");

app.use(express.json());
app.use(cookieParser());
app.use("/",express.static("uploads"));
app.use(bodyParser.urlencoded({extend:true ,limit:"50mb"}));


if(process.env.NODE_ENV !=="PRODUCTION"){
    require("dotenv").config({
        path:"backend/config/.env",
    });

};
const user =require("./controller/user.js");

app.use("/api/v2/user",user);

 app.use(ErrorHandler);
 
module.exports=app;