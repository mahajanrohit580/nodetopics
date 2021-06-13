const mongoose = require('mongoose');//require package

var empschma = new mongoose.Schema({//develeop schma for mongoose name empschma
    empname :"String", 
    empid : "String",
    perhourrate : Number,
    totalhour : Number,
    t:Number,
});


empschma.methods.totalwork=function(){//create method name totalwork throwwmpschama
    return this.totalhour*this.perhourrate;
}



var empdata = mongoose.model('employees',empschma);//create model of schma
var data =new empdata({//inserting value's in schma
                       empname :"ram",
                       empid : "ram123",
                       perhourrate: 150,
                       totalhour :12,
                       });
 data.t=data.totalwork();               

// console.log(data.totalwork());
 console.log(data);//accessing schma value's
