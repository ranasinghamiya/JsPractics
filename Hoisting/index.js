///ONLY DECLARATIONS ARE HOISTED
x=1;//Initialize x,and if not already declared,declare it but no hoisting as there is no var in the statement.
console.log(x+" "+y); //1 undefined; y is undefined
// this prints value of  y as undefined as javascript only hoists declarations.
var y=2;//declare and initialize y
console.log(a+" "+b);//a is undefined; b is undefined
a="cran";
b="berry";
console.log(a+" "+b);//cranberry
