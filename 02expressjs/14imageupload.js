const express = require('express');
const app = express();
const multi = require('multer');
const path1 = require('path');
const imgdata = require('./imageuploads');

app.set('view engine','ejs')
app.use(express.static("public"));


var Storage1 = multi.diskStorage({
    destination : "./public/uploads/",
    filename : (req,file,cb)=>{
        cb(null,file.fieldname+"_"+Date.now()+path1.extname(file.originalname))
    }
});


var upload2 = multi({storage:Storage1}).single('fileupload');


app.get('/imageuploade',function(req,res){
    var imglist=imgdata.find({});
    imglist.exec((err,data)=>{
        if(err) throw err
        res.render('14imageupload',{sucess:data,mgs:''});
    });
});


app.post('/uploadedimage',upload2,function(req,res){
    var img = req.file.filename;
    var imgsaved = new imgdata({
        imgname : img,
    });
    imgsaved.save(function(err,data){
        if(err) throw err
        var imgdatalist = imgdata.find({});
        imgdatalist.exec((err1,data2)=>{
            if(err1) throw err1
            res.render('14imageupload',{sucess:data2,mgs:'image is uploaded...!!!'});
        });
    });
});

app.listen(1234);