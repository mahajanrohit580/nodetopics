//prototype work as inhertence in node
//prototype provide the functionality to add value or modifiy the function or class
class Pro{
    constructor(name,clss){
        this.name=name;
        this.clas=clss;
    }
    getdis(){
        return `name ${this.name} and class ${this.clas}`
    }
}
Pro.prototype.age=function(a){//prototype decleare in class added age
                         
                            return ` ${this.getdis()} and ${a} `;//calling of class in prototype 
                            };

var pr=new Pro("rohit","node");//passing value's in class
//  console.log(pr.age(25));//calling of prototype throw class obj
// console.log(pr.getdis());


//prototype throw function
var fun=function(name,cls){
                   this.name = name;
                   this.clss=cls;
                   this.view=function(){
                       return `name is ${this.name} class ${this.clss}`;
                                       }
                  }
fun.prototype.age=function(a){//updateed prototype with age added
                  return  `name is ${this.name} and clas is ${this.clss} and update age is ${a}`;
};
// var f=new fun("rohit","node");

// console.log(f.view())
// console.log(f.age(20));//calling

fun.prototype={//the other way
    getview :function(a){
                     return `${this.name} and the age is ${a}`;
                       }
}
var f=new fun("rohit","node");
console.log(f.getview(20));
