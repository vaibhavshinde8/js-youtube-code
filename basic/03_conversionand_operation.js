let score="44";

console.log(typeof(score));
console.log(typeof score);


let valueInNumber=Number(score);
console.log(typeof valueInNumber);


//"33"=>33
//"33abc"=>NAN
//true=>1 ;false=>0

let numberInBoolean=0;
let ans=Boolean(numberInBoolean);
console.log(ans);  ///for 0->false and others than 0 are true

let str1="vaibhav"
let str2="shinde"
let str3=str1+str2;

console.log(str3);

console.log("1" + 1);   //=>11
console.log(5 + "1");   // =>51
console.log(5 + "1"+5+"5"); //=>5155
console.log(2 + 4 + "2");  //=>62

/// An expression is called the prefix expression
 //if the operator appears in the expression before the operands. 


 console.log("222"==222) ///lose check==> only check values
 console.log("11"===11); ///tight check==>  check values as well as data types


 /// # premitive data types
 // 7 types:number,string ,Boolean,null,undefined,symbol,bigInt;

 //non-premitive (reference)=> array, object,function

 const heros=["shaktiman","spiderman","mymam"];

 let myObj = {
    Name:"hitesh",
    age:22,

 }


 const myFunction=function(){
    console.log("hello world");
 }

 //**************************************************************** */

 //two types of memory---1.stack ,2.heap

///stack(premitive) //heap(non premitive);
 // all the primitive values ===>>are going to stack
 // and all the non premitive values ==> are going to heap

 // for previtive data types==so we can say that if we some changes in variables so that changes in copy like call by value
 // for non-previtive data types==so we can say that if we some changes in variables so that changes in actual values like call by reference

 let myYoutubeName="vaibhavshinde008";
let anotherName= myYoutubeName;
  anotherName="vaibhav";
 console.log(myYoutubeName);
 console.log(anotherName);



 let user1={
    email:"vshinde22",
    upi:123,
 }

 let user2=user1;
 user2.email="vashinde2213242";
 console.log( user1.email)
 console.log( user2.email)
 console.log("1"+3);