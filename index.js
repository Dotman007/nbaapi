const express = require('express');
const app = express();
const jsonData  = require("./data.json");
let port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.get("/getplayers",(req, res)=> {
    res.send(jsonData);
})
app.listen(port,()=>{
    console.log('Example app');
})