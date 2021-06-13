//normal callback function
function display(shw)
{
    console.log("this is display function..!!");
    shw();
}
function show()
{
    console.log("this is show function..!!");
}
display(show);

//callback hell
function add(v){
  return (v+5);
}
function sub(v){
    return (v-15);
}
function multi(v){
    return (v*10); 
}
console.log(multi(10));

add(5,function(addres,err){
    if(!err){
        console.log(addres);
    }else{
        console.log("dcqed");
    }
});