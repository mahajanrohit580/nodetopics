const express = require('express');
const app = express();
const data = require('./employees');
const body_parse=require('body-parser');
app.use(body_parse.urlencoded({extended:false}));
app.use(body_parse.json());

app.set('view engine','ejs');


app.get('/profile',function(req,res){
    data.find({},function(err,data){
      if(err){ app.render('13emppro',{mgs:"no data avalable....!!"}); }
      else{
        res.render('13emppro',{mgs:data,del:''});
      }
    });
});

app.get('/regform',function(req,res){
res.render('13empreg',{mgs:''});
});

app.post('/regform',function(req,res){
  let name =req.body.name;
  let idno =req.body.idno;
  let perhourerate =req.body.perhourrate;
  let totalhour =req.body.totalhour;
  let totalsel = parseInt(perhourerate)*parseInt(totalhour)
  var dataentery = new data({
    empname :name,
    empid :idno ,
    perhourrate:perhourerate,
    totalhour: totalhour,
    t : totalsel,
  });
  
  dataentery.save((err,data)=>{
     if(err){
       res.render('13empreg',{mgs:'Already REGISTRATION DONE..!!'});
     }
     else{
      res.render('13empreg',{mgs:'REGISTRATION DONE..!!'});
     }
  });
});


app.post('/search',function(req,res){

  var sername =req.body.sername;
  var serid=req.body.serid;
  if(sername !== "" && serid !=="")
  {
    var filterserch ={$and:[
                            {empname :sername},
                            {empid:serid}
                           ]
                     }
  }
  else if(sername == "" && serid !=="")
  {
    var filterserch={$and:[
                         {empid:serid}
                          ]
                    }
  }
  else if(sername !== "" && serid =="")
  {
    var filterserch={
                     $and:[
                           {empname:sername}
                          ]
                    }
  }
  else{
    var filterserch = {}
  }
  var serchdata=data.find(filterserch);
  serchdata.exec(function(err,data){
    if(err) throw err
    res.render('13emppro',{mgs:data});
  });
});

app.get('/edit/:id',function(req,res){
     var id = req.params.id;
     var editid = data.findById(id);
     editid.exec(function(err,data){
       if(err) throw err
       res.render('13empupdate',{editdata:data,err:''});
     });
   });

app.post('/xyz/:id',function(req,res){
 
      var id = req.params.id;
     var name =req.body.name;
      var empid = req.body.idno;
      var perrate =req.body.perhourrate;
      var thr = req.body.totalhour;

      var updated=data.findOneAndUpdate({_id:id},{
        empname :name,
        empid :empid ,
        perhourrate:perrate,
        totalhour: thr,
        t:parseInt(req.body.perhourrate)*parseInt(req.body.totalhour)
      });
     updated.exec(function(err,data){
      if(err){
        res.render('13empupdate',{editdata:data,err:"DATA is not updated..!!"})
      }
      else{
        res.render('13empupdate',{editdata:data,err:"DATA is updated..!!"});
      }
     });
});

app.get('/deletedata/:id',function(req,res){
  var id = req.params.id;
 var datadeleted=data.findByIdAndRemove({_id:id},(err,data)=>{
   if(err) throw err});
   datadeleted.exec((err,data2)=>{
     if(err) throw err
    data.find({},function(err,data){
      if(err){ app.render('13emppro',{mgs:"no data avalable....!!"}); }
      else{
        res.render('13emppro',{mgs:data,del:'data deleted successfullyy..!!'});
      }
    });
   });
 
});
  
app.listen(600);