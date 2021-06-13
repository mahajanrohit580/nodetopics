const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/home',function(req,res){
    res.render('06home',{title:'ejs engine',mgs:'it  a template engine..!!'});
});

app.listen(210);