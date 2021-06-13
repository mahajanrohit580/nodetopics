const moongoose = require('mongoose');
moongoose.connect("mongodb+srv://user:123@cluster0.pzlm6.mongodb.net/school?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:false,
});

var imgschema = new moongoose.Schema({
    imgname:{
        required:true,
        type:String,
        index:{ unique:true },
            }
});

module.exports = moongoose.model('imageuploads',imgschema);