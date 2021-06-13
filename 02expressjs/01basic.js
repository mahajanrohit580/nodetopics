const express = require('express');//pre-define module
const app = express();//method of module providing functionality's

app.get("/",function(req,res){//thid known as router
    res.send("express is in working mode...!!");
})

app.get("/user",(req,res)=>{//user can also use arrow function of ecmascript
    res.send("this is /user..!!");
})


app.listen(200,()=> console.log("sever 200 is started...!!"));//creataion of port