const mongoose = require('mongoose');//pakage rewquire
mongoose.connect("mongodb+srv://user:123@cluster0.pzlm6.mongodb.net/school?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
});//dtabase connection

const con = mongoose.connection;//connection object creation for accesss method
con.on("connected",function(){
    console.log("Database connected...!!");
});


var empschma = new mongoose.Schema({
    empname:{//design schema with valiation
             type:String,
             required:true
            },
    empid :{
             type:String,
             required:true,
            index:{unique:true},
           },
    perhourrate :{
        type:Number,
        required:true,
      },
    totalhour :{
        type:Number,
        required:true,
    },
    t:{
        type:Number,
        required:true,
    },
});

//extra method addtion to schema
empschma.methods.totalwork=function(){
    return this.totalhour*this.perhourrate;
}


//model crateion on schema for database
var empdata = mongoose.model('employees',empschma);
var data =new empdata({//object passing with values's
                       empname :"uamta",
                       empid : "uam123",
                       perhourrate: 110,
                       totalhour :20,
                       });
 
 data.t=data.totalwork();//mehtod added to schema

 data.save((err,data)=>{//data base save query
     if(err)
     {
         console.log("data not saved..!!");
     }
     else{
         console.log(data);
         con.close();
     }
 });
con.on('error',console.error.bind(console,'connection error :'));//connection error fail statement
 con.on("disconnected",function(){
    console.log("Disconnected..!!");
});


