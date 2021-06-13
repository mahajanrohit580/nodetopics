
const events = require('events');//module globaly define no installation dirctly used

const event = new events.EventEmitter();//object creaction of eventemitter function

event.on('honclick',()=>{console.log("this is event emitter..!!");//event create on on()method

});
event.on("add",(a,b)=>{
   console.log(a+b);
})
//event.emit('honclick');//event call throw emit() method and passing name of event 
//event.emit('add',2,2);//parameter passing is allowed in event emitter




//Muktiple event Calling 
const First_event=function(){//function decleration
    console.log("First_event is called..!!");
    event.emit("click3",2,2);//calling of sec event with parameter passing
}

const Sec_event=(a,b)=>{//sec event genration
    console.log(a+b);
}
event.on('click2',First_event);//event emigration on click ,function with on method of event
event.on('click3',Sec_event)//emigration of sec event
event.emit("click2");//calling of event
