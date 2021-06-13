const express = require('express');
const app =express();
const md =require('./05externalmiddeleware');//import external middleware file

var mdw = function(req,res,next){//inpage middleware function
    // res.send("this is middeleware..!!");
    console.log("that's the inpage middleware...!!");
    // if(req.params.name == undefined)
    // {//condition passing
    //     console.log("invalid user");
    // }
    // else{
    //     console.log("User login :"+req.params.name);
    // }
    next();
}
// app.use(mdw);//in this way it was beaing golblely use mens it work for all the routrt tht weare difine

app.get('/login/:name?',md.abc(),function(req,res){//accesing external middleware function
   res.send("this is login..!!"); 
});

app.get('/home',md.hom(),function(req,res){
 res.send("that' the home page..!!");
});

app.get('/mdvar',mdw,function(req,res){//accessing inpage mideleware function
    //for spacific router
   res.send("this is on page middleware..!!");
});

app.listen(200);