var express = require('express');
const body_parser = require('body-parser');//pakage reqire to get value's from form
var app = express();

app.set('view engine','ejs');
app.use(body_parser.urlencoded({extented:false}));//thi smethod is use to uncode the data from the form
//and pass the router
app.use(body_parser.json());//through this method the passin data wass coverted into the json formate
//app.use(method help's to pass it to the every router )

app.get('/login',function(req,res){
    res.render('08login');
});
 
app.post('/login',function(req,res){
    var email=req.body.email;
    var passw=req.body.password;
    res.render('08profile',{email:email,pass:passw});
});

app.listen(8000);