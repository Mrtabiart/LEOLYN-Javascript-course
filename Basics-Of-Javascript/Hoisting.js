// what is hoisting in javascript 
//


greet() // function decalration is always on compile time
function greet (){
    console.log("good morning");
}

console.log(a); // it will say first define the value because hoisting not implement on let 
let a = 9;


console.log(b); // it will execute because var support hoisting concept got it  
var b = 9;

