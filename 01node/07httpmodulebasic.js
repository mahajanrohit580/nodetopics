var http = require('http');//pre inbult module in node hepl to create server
http.createServer(function(req,res){//function of module to create sever except a callback function 
    res.writeHead(200,{"content-type":"text/html"})//except two parameter req and res
    res.write("<h1>hello</h1>");
    res.end();//always end the res at the end of res

}).listen(200);//method help to create port for acesss