 var val =function(){
                   return function(req,res,next)
                          {
                              console.log("external middelware function 1...!!");
                              next();
                          }
                                }
var home =function(){//delecre each middleware for each router
 return function(req,res,next)
   {
  console.log("external home function 1...!!");
  next();
    }
 }                                
module.exports.abc= val;//user have to declere and export each middleware
module.exports.hom= home;
            
                