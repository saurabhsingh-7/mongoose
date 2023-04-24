const express = require("express");
const mongoose= require("mongoose");
const url="mongodb+srv://db_user:db_user@cluster0.1z91njg.mongodb.net/?retryWrites=true&w=majority"
async function connect(){
    try{
       await mongoose.connect(url)
        console.log("connected")
        app.listen(4000,()=>
 {
  console.log("Listening on port 4000")
 });
    }
    catch(error)
    {
        console.log(error)
    } 
}
connect();
const app=express();
 