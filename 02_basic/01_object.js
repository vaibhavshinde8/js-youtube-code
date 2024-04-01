//singleTon ===>object.create



//object literals
      //||
const mySym=Symbol("key1");


const jsUser={
    name:"vaibhav",
    age:20,
    [mySym]:"This is my Symbol",  //use scqure brackt for delecrating symbol
    "full name":"vaibhav shinde",
    email:"vaibhavshindegoogle.com",
    location:"nsk",
    isLogIn:true
}


console.log(jsUser.email);
console.log(jsUser["email"]); //these are two technique to acess element of object
console.log(jsUser["full name"]);   //we acess full name
console.log(jsUser.mySym);
console.log(typeof mySym);
jsUser.email="vaibhav@google.com";
console.log(jsUser.email);

Object.freeze(jsUser);  //after freezing object change will not reflect

///singleton object
const newUser=new Object() //1    //this is singleTON object
console.log(newUser);
const user={}      ////2   //but this is not singleton object
console.log(user);    //these 1 and 2 are both object 

user.id="123abc"
user.name="saam"
user.isLogIn=false
console.log(user);

const newObject={
    id:"abc123",
    email:"vshinde2217@gmail.com",
    fullName:{
        firstname:"vaibhav",
        lastname:"shinde",
    }
}
console.log(newObject)

const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};

const obj3={obj1,obj2};  //here occurs problem like in array
console.log(obj3);

const obj4=Object.assign({},obj1,obj2);//this is another way to merge two or more objects
console.log(obj4);

const obj5={...obj1,...obj2};  //this is also another way to merge two or more objects
console.log(obj5);              //this we have used in arrays

const users=[    ///array of objects
    {
        id:"1",
        name:"vaibhav"
    },
    {
        email:"vshinde2217@gmail.com",
        phone_no:9422623965,
    }
]

console.log(users[1].email);  //this is way to acess key from oject of array

console.log(Object.keys(newObject));    //it will return the array
console.log(Object.values(newObject));  //it will return the array
console.log(Object.entries(newObject));  //return pair of key and val in array form

console.log(newObject.hasOwnProperty("email"));
//it will check that perticuler key is present or not and return in boolean


//object de-structuring
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  // Object de-structuring
  const { name, age, city } = person;
  
  console.log(name); // Output: John
  console.log(age); // Output: 30
  console.log(city); // Output: New York
//Object de-structuring is a feature in JavaScript that allows 
//you to extract multiple properties from an object 
//and assign them to variables in a concise and readable way. 


///json

//JSON (JavaScript Object Notation) is a lightweight data interchange format
 //that is easy for humans to read and write and easy for machines to parse and
//generate. It is based on a subset of the JavaScript programming language and is 
//often used to transmit data between a server and a web application, serving as
//a data format that is independent of programming languages.

/*
{
    "name": "John",
    "age": 30,
    "city": "New York",
    "isStudent": false,
    "hobbies": ["reading", "traveling", "photography"],
    "address": {
      "street": "123 Main St",
      "zip": "10001"
    }
  }
  */
 [
    {},    //aslo we get json in the form of arrays
    {},   ///this is aslo another way for json
 ]
  
