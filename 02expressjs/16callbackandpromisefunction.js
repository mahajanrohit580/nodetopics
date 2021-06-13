//callback function mean's callinf of function
//inside a function it's a syncrones formation 
function t(ty){
    console.log("sfsd");
    return ty()
}
t(f);
function f(){
    console.log('hdhhdhdhd');
}

//promise function
var promise = new Promise(function(resolve,reject){//promise function built as obj
   resolve('rohit');//it take two parameter's if 1 means' resolve it true
//    reject('error'); //if reject consider then
});

// promise.then(
//     function(mgs){//resolve this will run
//         console.log(mgs);
//     },
//     function(err){//the secounf declere function will b run
//       console.log(err);
//     }
// );
promise.then((err)=>{//user can also mention arrow function in promise
    console.log(err);
}).catch((mgs=>{
    console.log(mgs);
}));