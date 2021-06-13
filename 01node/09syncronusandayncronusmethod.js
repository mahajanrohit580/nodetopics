const fs = require('fs');


//Aysncronuse method
fs.readFile('./08file.txt','utf8',(err,data)=>{
    if(err)throw err;
    console.log(data);
})
console.log("Asyncronse method..!!");
//asyncronuse method excute the method which excute first and gave the instence result



//Syncronuse method (always use try catch block with Sybcronuse method)
try{
    let data =fs.readFileSync('./08file.txt','utf8');
    console.log(data)
}
catch(err){
    console.log(err);
}
console.log("this syncronuse method...!!");
//where syncronuse method gave the result in the syn from firt the gaven method will
//excute and then the secound method will  excuted 