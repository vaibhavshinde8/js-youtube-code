const array=[8,1,2,"vaibhav",true];   ///in js array contain multiple types of datatypes elements
//console.log(array);
///array is the object
//in js array is resizable

//in javascript if we perform copy operation then create shallow copy
//that means if we changes in copy array that changes reflected in original array also

const arr=array;
arr[0]=52;
 //console.log(array[0]);

const arr2=new Array(1,2,3,4,5);

arr2.push(10);
arr2.push(20); //insert at last
arr2.push(30);
arr2.pop();
arr2.pop(); //remove from last
//console.log(arr2);


arr2.unshift(9);  //insert at first
arr2.shift();  //remove from first

//console.log(arr2.includes(10))   //return type is booelan
//console.log(arr2.indexOf(10));

const newArr= arr2.join();   //array convert into string
//console.log(arr2);
//console.log(newArr);


//slice , splice
//slice method does not manipulate original array
//splice method manipulate the original array

const originalArray=[10,20,30,40,50,60];

const arr1=originalArray.slice(1,3); //1 2 
console.log(arr1);
console.log(originalArray);

const arr3=originalArray.splice(1,3);  // 1 2 3
console.log(arr3);
console.log(originalArray);
//console.log(arr3);



/////array basics part 2

const marval_heros=["spiderman","supperman","shaktiman"];
const dc_heros=["superman","flash","ironmam"];

//marval_heros.push(dc_heros); //merge two arrays..but there is a big problem
                            //these two arrays does not directly merge..second whole array is 
                            //assume one element that access using [][];
//console.log(marval_heros);


const allHeros=marval_heros.concat(dc_heros); ///this is  one of the good technique 
                                            //concat two  arrays and return new concated  array;
console.log(allHeros);


const new_all_heros=[...marval_heros,...dc_heros,...allHeros];  //in which sprade array
                                        //that means sprate all element in array and merge that elements
                                        //in which new merge multiple arrays

const another_array=[10,20,[30,40,50],[62,45,85,5,[98,74,32,45]]];
console.log(another_array);

const another_real_array=another_array.flat(Infinity); //this is another technique is used for speate
                                                        //and merge all elements in array
console.log(another_real_array);                         //infinity is the depth

const string="Hitesh";
console.log(Array.isArray(string));
console.log(Array.from(string));


const score1=100;
const score2=200;
const score3=300;
console.log(Array.of(score1,score2,score3));


