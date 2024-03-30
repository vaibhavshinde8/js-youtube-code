const sname="hello ";
const marks=7;
console.log(sname+marks+" value");  //this is one way 

console.log(`Hello my name is ${sname} and my marks ${marks}`);   //String interpolation

const newString=new String('Vaibhav');   ///this is another way to declare string
console.log(newString[2]);
console.log(newString.indexOf('a'));



///Number in js
const number=400   ///this is one way
console.log(number);

const newNumber=new Number(400);    //this is another way
console.log(newNumber);          //if we want to only number data then we used this technique

console.log(newNumber.toString());
console.log(newNumber.toString().length);

console.log(Math.floor(4.8));
console.log(Math.ceil(4.6));
console.log(Math.round(4.4));
console.log(Math.abs(-8));
console.log(Math.random()*10);



