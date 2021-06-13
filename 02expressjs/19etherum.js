const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/eth',function(req,res){
    res.render('19eth');
});
// app.post('/eth',function(req,res){
//      res.render('19eth');
// });
app.listen(30, () => {
     console.log('Running at http://localhost:3000');
   });