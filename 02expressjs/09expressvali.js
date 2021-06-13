const express = require('express');
const app = express();
const body_parser = require('body-parser');
const {check,validationResult ,matchedData } = require('express-validator');
// const { matchedData } = require('express-validator');

app.set('view engine','ejs');
app.use(body_parser.urlencoded({extended : false}));
app.use(body_parser.json());

app.get('/login',function(req,res){
    res.render('08login',{error:'',ref:''});
});

app.post('/login',[check('email','Invalid Email..!!').isEmail(),
                   check('password','Required min:5').isLength({min:5}),
                   check('cpassword').custom((value,{req})=>{
                       if(value!==req.body.password)
                       {
                           throw new Error("password not match...!!");
                       }
                       return true;
                   })
                  ],function(req,res){
                    
                    var email = req.body.email;
                    var pwd = req.body.password;

                    const err = validationResult(req);
                    if(!err.isEmpty())
                    {
                        const refield = matchedData(req);
                        res.render('08login',{error:err.mapped(),ref:refield});
                    }
                    else{
                        console.log(email,pwd);
                        res.render('08profile',{email:email,pass:pwd});
                    }


});

app.listen(600);