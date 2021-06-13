const express = require('express');
const app= express();
//genrelly router are used to create  the url's
//hence non of the router method wass directly acces to the form acept get method
app.get('/home',function(req,res){//get router is used to get the data from the form
    res.send("this is get method router..!!");
});

app.post('/login',(req,res)=>{//post router is used to send the data as requirement of the user
    //ex in database or form
  res.send("it's a post method..!!");
});

app.put('/replace',function(req,res){//this method of the router is used to replace or update
    //the data
    res.send("this is put method..!!");
});

app.delete('/del',function(req,res){//this method is used to deleted the data or detail
res.send("this is the delete router....!!");
});
app.listen(201,()=>{console.log("server is started..!!");})