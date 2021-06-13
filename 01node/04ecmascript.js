//let,const
//class,function's

let a="rohit";//let is an scopeic varaiable where var dosen't proved any type of error but let will
function l()
{
    //  a="mahajan";//this will b override the value of a in let
     let a="mahajan";//this value is only acessable in the function only
    console.log(a);
}

// l();
// console.log(a);



//Ecma script 2015 provide the facility to use class object ,array in scripting lang
class User{
       constructor(name,age,email)//to use class in script user always have to define a constructor
       {
         this.name=name;//paramerter passing
         this.age=age;
         this.email=email;
       }
       addval(){
               this.class="nodejs";//added value in classs
               }
       getdisplay(){
                return `
                        Name : ${this.name}//printing class value throw function with template string
                        age  : ${this.age}
                        email : ${this.email}
                        class : ${this.class}//to get this value user have to calll the function in whice it hass been declare
                       `;
                   }
};

var use =new User("rohit",24,"r@gmail.com");//value passing in object for class
use.addval();//calling the function in whice class has been declere
console.log(use.getdisplay());//value printing function
console.log(use.domin)


