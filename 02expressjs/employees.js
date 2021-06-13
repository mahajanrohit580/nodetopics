const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://user:123@cluster0.pzlm6.mongodb.net/school?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:false,
});

var empschma = new mongoose.Schema({
    empname:{
        required:true,
        type:String,
        index:{ unique:true }
        },
    empid:{
        required:true,
        type:String,
        index:{ unique:true }
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
        }
    
});




module.exports = mongoose.model('employees',empschma);