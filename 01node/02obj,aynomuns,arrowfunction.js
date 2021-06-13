//simple object defination in nodejs
var obj = {
           
           name : "rohit",
           email : "r@gmail.com",
           class : "node,javscript",
           display:function(){  //function in obj
                 return` ${this.name}`;
           }

          };


console.log(obj.display());//function calling of object
console.log(obj.email);//property calling of obj

aynonumus function
var ayn = function(a,b){
          console.log(c=a+b);
          console.log("aynonumus function");
}
ayn(5,6);//calling throw variable name of aynonumus function

var clbck=()=> {return `call back function`} ;//{ } with curly brices you have to use return key word to return thew value
var clbck=()=> console.log("swyglwyig") ;//with out using bracket or declering () this pranthisis it return the value automaticly
console.log(clbck());
