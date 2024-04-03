function userLogIn(userName){
    return `${userName} just log in`;
}
console.log(userLogIn("vaibhav"));

function calculateCartprice(num1){
    return num1;
}
console.log(calculateCartprice(100));

 
function calculateCartprice2(...num1){ ///rest ... operater or sprade operater
    return num1;
}
console.log(calculateCartprice2(100,200,300,4000));



function calculateCartprice3(val1,val2,...num1){ ///rest ... operater or sprade operater
    return num1;
}
console.log(calculateCartprice3(100,200,300,4000));
//output is 300 , 4000 beacause 100 and 200 are passed throught val1 and val2
//and remamining is passend to rest or sprade operater

const user={
    name:"hitesh",
    age:21
}

function handleObject(anyObject){  //in this way we access properties of object in function
    console.log(`name is ${anyObject.name} and age is ${anyObject.age}`);
}
handleObject(user);


//function scope

function one(){
    const userName="hitesh"

    function two(){
        const webside="youtube"
        //console.log(userName);
    }
    //console.log(webside);  ///child access parents characterstics but pareent cannot
                            //cannot access child characterstics
    two();
}
one();


addOne(5); ///this function call allows in js for following type of function

function addOne(val){
    return val+1;
}

addOne1(5);//this function call not allows in js for following type of function
            //beacause they cannot be called before they are declared.
 
const addOne1=function(val){
    return val+1;
}
addOne1(5);//this is allows in js

