//scopes.js in javascript local(function) global block scopes functional

{
    let a = 9 ; // if we are using the let then it is compulsory to use it in the block level scope
    console.log(a); // and we can access it the same bllock rather than outside of it 
}
console.log(a); // it will through a error 

// or agr hum let ko block level se bahir rakhin to kahin b access kar skty hain 

 var a = 9 ; // var we can use it in both global level scope and the block level scops both 
{
    var a = 9 ; // it will not give any error 
}


console.log(a);

function ax(){
    var a =10;
    console.log(a); // the var is access into the same functional block scope only 
}
// Global scope
// Block scope
// Function scope

// And remember this simple rule:

// let    → Block scoped
// const  → Block scoped
// var    → Function scoped