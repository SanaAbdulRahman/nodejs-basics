const express=require("express");
 

const app=express()

app.use('/',(req,res,next)=>{
    res.send("Hi I am Sanath")
})


app.listen(5000,()=>{
    console.log("Connected to the port 5000");
})