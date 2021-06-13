const express = require('express');
const app = express();

app.get('/employe/:id?',(req,res)=>{
    if(req.params.id == undefined)
    {
        res.send("ID is not entered..!! ");
    }
    else{
        res.send("the employee id is : "+req.params.id);
    }
});

app.get('/bookflight/:from?.:to?',function(req,res){
    if(req.params.from == undefined && req.params.to == undefined)
    {
        res.send("enter the flight's..!!");
    }
    else{
        res.send("the flight is from : "+req.params.from+" to : "+req.params.to);
    }
    
});

app.get('/sec/ab?cd',function(req,res){//this ? symbol makes the before letter an optional case
    res.send("the requested id is : "+req.params);//and the url doesn't return any value it's undefine
});

app.get('/plusarg/ab+cd',function(req,res){//this + symbol help's to add no of b in it
 //expect b non of the agr with b expected
    res.send("doesn't return any value : "+req.params[0]);
});

app.get('/multi/ab(*)cd', function (req, res) {//this will also work as the same manner
    //hence abcd is complsure at that * place the id will b passed
    res.send("this will return the value in obj form : "+req.params[0])
  })

  app.get('/brack/ab(cd)?e', function (req, res) {//() heare the the inside valuse in this bracket
    //will b the conditional if it's their ok not their ok
    res.send('ab(cd)?e')
  })

app.get(/a/, function (req, res) {//this syntex except anything with a no matter what
    res.send('/a/')
})

app.get(/.*fly$/, function (req, res) {
    res.send('/.*fly$/')//url except anything with fly at the end of the passing parameter
})
app.listen(300);