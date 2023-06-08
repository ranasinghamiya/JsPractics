//All primitive data types


//null
//undefined
//number
//string
//boolean
//bigint
//symbol (this is newly added features some browser does not support)

var data =null;
var data1;//undefined browser provide it by default
var data3=undefined;//undefined browser


console.log(typeof data);//object//this is called and big error in js
console.log(typeof data1);//undefined
console.log(typeof data3);//undefined

//String Data Type
//concatenation
var a=11//type of a number
var b="22"//type of b is string
var c=a+b// c=1122 type of c will be string
var d=33
var e=a+b+c//c=112233 type of c will be string
//but if we do e=a+c+b then e=4422 type of e will be string
// anything b/w the single quoted and double quoted is string in js


var example1="";
console.log(typeof example1);//string
example1 = " ";
console.log(typeof example1); // string
example1 = "1234";
console.log(typeof example1); // string
example1 = (1234).toString();
console.log(typeof example1); // string
example1 = "ghey" + example1;
console.log(example1); // ghey1234


//includes method in string;

var example2="Amiya Ranasingh";
var isValueExist=example2.includes("Ranasingh"); // Here first argument is searchString and second argument is from where you wanto start second argument is not necessary
 console.log(isValueExist);

 //Trim  => remove extra space from both side

 var example13=" Amiya Ranasingh "
 console.log("hello2" + example13 + "Hello");//hello2 Amiya Ranasingh Hello
 console.log("hello2" + example13.trim() + "Hello")//hello2Vishal SharamaHello

 //trimEnd => remove extra space from the end 
 let text1 = "     Hello World!     ";
 let text2 = text1.trimEnd();
 console.log(text2);//     Hello World!

 //trimStart => remove extra space from start

let text14 = "     Hello World!     .";
 let text15 = text14.trimStart();
 console.log(text15);//Hello World!     .


 // charAt => it give you the specific  string for specific index indexing will start with zero

 var example16 = "hello";
 console.log(example16.charAt(0));//h

 //length will give you the length of string

 let text = "Hello World!";
let length = text.length;
console.log(length);//12

// replace

var example16="Engineering";
console.log(example16.replace("e", 'a'))//Enginaring

console.log(example16.replaceAll("e", "a"));//Enginaaring

//split =>The split() method splits a string into an array of substrings,The split() method returns the new array,
var splitExample="Hello";
let array=splitExample.split("");
console.log(array);//(5) ['H', 'e', 'l', 'l', '0']

//reverse =>The reverse() method
let arr=array.reverse(); // ['o','l','l','e','h'];

//join =>The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object)

array.join('')//"hello"

//slice =>The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

//splice => The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements


const months=['Jan', 'Mar', 'Apr', 'May', 'June']
months.splice(1,0,'Feb')
//Insert at index 1
console.log(months);
//['Jan', "Feb', Mar', 'Apr', 'May', 'June']

months.splice(4, 1, 'May');
//Replaces 1 element at index 4
console.log(months);
//['Jan', "Feb', Mar', 'Apr', 'May']

//========>Number<========
var numberExample=1234;
var n1=1234.5;
var n2=123456.11111;
console.log(typeof numberExample, typeof n1, typeof n2);//number number number

//=======>Bigint<=========
var bigintNumber=1n;
console.log(typeof bigintNumber);//bigint

// =================>    Boolean   <======================

var booleanExample=true;
console.log(typeof booleanExample);//boolean
booleanExample=true;
console.log(typeof booleanExample);//boolean


// nullish operator

// In javascript 0 is consider as false all another number value is consider as true
// In Javascript empty string is consider as false all others value consider as true

if(1){
    console.log("I am true");//code will come here
}

if(0){
    console.log("I am false");//code will not come here
}

if(""){
    console.log("I am false string");//code will come here
}

if(" "){
    console.log("I am true string");//code will not come here
}


// ! =>this will do the opposite of the value
console.log(!true); // false
console.log(!0); // true
console.log(!1); // true // same thing for ths string
