
//Date
let myDate=new Date();   //object of date
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(typeof(myDate));   //date is the object


let newDate=new Date(2002,10,7);
//console.log(newDate.toString());
let myTimeStamp=Date.now();
console.log(myTimeStamp);
console.log(newDate.getTime());

console.log(Math.floor(Date.now()/1000));   //miliseconds convert into seconds
let myD=new Date(); 
console.log(myD.getDate());

myDate.toLocaleString('default',{
    weekday:"long",
    timeZone:""
})

