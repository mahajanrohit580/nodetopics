// const fs = require('fs');//fs is the pre inbult module hard code jst to read file and print in console

// fs.readFile("./08file.txt","utf8",(err,data)=>{//file read is the method to read file
//       if(err)throw err
//       console.log(data);
// })

const http = require('http');//this block is use to access the file on the server
const fs = require('fs');

http.createServer(function(req,res){
    fs.readFile('./08file.txt','utf8',(err,data)=>{
        if(err)throw err
        res.writeHead(200,{'content-Type':'text/plain'});
        res.write(data);
        res.end();
    })
    fs.writeFileSync('08file.txt',"thie id fs method to create file....!!");//this method of fs 
    //update the file and override the content of it which wass in it
    fs.appendFileSync('08file.txt',"werrerlguurlg");//this metyhod of fs will add the contain in the gaven
    //filename
    fs.unlink('path of file',(err,data)=>{if(err)throw err; console.log("file deleted..!!")})
    //this function of file sysytem is used to delete the file
}).listen(212);