const express = require('express');
const app = express();

app.set('view engine','ejs');
app.set('views','./public/views');//to acess inside the folder

app.get('/login',function(req,res){
    res.render('07login',{title:'this is login'});
});

app.listen(500);