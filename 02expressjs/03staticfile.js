const express = require('express');
const app = express();

app.use('/fter',express.static('assets'));//this /fter is jst ot refer and assets IS THE NAME OF THE FOLDER
//to use static files sysytem use this method

app.get('/home',function(req,res){
    res.sendFile(__dirname+'/03home.html');//when user is not useing ejs engin use this way to acess
    //static file
});
app.listen(203);