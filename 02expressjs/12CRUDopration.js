const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://user:123@cluster0.pzlm6.mongodb.net/school?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
});

const con = mongoose.connection;
con.on("connected",function(){
    console.log("Database connected...!!");
});


var empschma = new mongoose.Schema({
    empname:{
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


empschma.methods.totalwork=function(){
    return this.totalhour*this.perhourrate;
}



var empdata = mongoose.model('employees',empschma);
var data =new empdata({
                       empname :"kamrau",
                       empid : "k123",
                       perhourrate: 110,
                       totalhour :20,
                       });
 
 data.t=data.totalwork();
// to create data in data base
//  data.save((err,data)=>{
//      if(err)
//      {
//          console.log("data not saved..!!");
//      }
//      else{
//          console.log(data);
//          con.close();
//      }
//  });


//to reade data from data base
//to access the data from the database user have toacess the
// model variable name
empdata.find((err,data)=>{
    if(err){
        console.log("NO Data Exit's...!!");
    }
    else{
        console.log(data);
        con.close();
    }
});
// con.on('error',console.error.bind(console,'connection error :'));
// con.on("disconnected",function(){
//     console.log("Disconnected..!!");
// });




// read particular data from database
// empdata.findOne({empname:"mamta"},function(err,data){
//     if(err){ console.log("data not forund..!!");}
//     else{ console.log(data.empid); con.close() }
// });




//todelete the the data in database
// empdata.findOneAndDelete({empname:"gamta"},(err,data)=>{
//     if(err){console.log("data is not updateted...!!")}
//     else{console.log("updated data"+data); con.close()}
// });


//toupdate the data in database
// empdata.findOneAndUpdate({empname:"uamta"},{empname:"mamta"},(err,data)=>{
//     if(err){console.log("data not updated...!!");}
//     else{console.log("data is updated..!!"+data);}
// });


