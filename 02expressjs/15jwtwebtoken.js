const express = require('express');
const app =express();
const jwt = require('jsonwebtoken');

//togenrate the localstorage
if (typeof localStorage === "undefined" || localStorage === null) {
    const LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }


//middelware for token
function checktoken(req,res,next){
    var mytoken = localStorage.getItem('mytoken');//throw this user get the token name
 try{
     jwt.verify(mytoken,'jwttokenrohit');//throw this user get the token value
 }
 catch(err){
    res.send("token not alerted...!!");
 }
 next()
};

app.get('/login',function(req,res){
    var token = jwt.sign({name:"rohit"},'jwttokenrohit');//jet token value accasble throw token
    localStorage.setItem('mytoken',token);
    res.send('token genrated...!! with login'+token);
});

app.get('/logout',function(req,res){
    localStorage.removeItem('mytoken');
    res.send("token destroyed...!! with logout");
});

app.get('/profile',checktoken,function(req,res){
    var mytoken = localStorage.getItem('mytoken');
    jwt.verify(mytoken,'jwttokenrohit');
    res.send("profile acessable throw tokengenrate...!!");
});

app.listen(258);