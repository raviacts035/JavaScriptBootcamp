// Bringing
const express= require("express");
//asseign
const app=express();
//port
const port=9100;

// starting listening through port
app.listen(port,()=>{
    console.log(`Express server running at port : ${port}`);
});

//API's from here 
app.get("/",(req,res) => {
    res.send("hello World, This is Home page");
})
app.get("/signin", (req,res) =>{
    res.send("This is a Sign-in Page");
})
app.get("/dashboard",(req,res)=>{
    res.status(200).send("<h1>This is the Main Dashboard</h1>");
})  