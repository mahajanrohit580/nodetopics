const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/tron',function(req,res){
    res.render('20tron');
});
app.post('/eth',function(req,res){
     res.render('20tron');
});
app.listen(3000, () => {
     console.log('Running at http://localhost:3000');
   });