// What is call stack the sequence in which the function are going to execute 
// It follows the principle of the LIFO last in first out 

function first (){
    second();
    console.log("the second function will execute first ill execute later");

}
function second (){
    third();
    console.log("the third function the upper line excute first then me");

}
function third(){
    console.log("all function are executing");
}

first();


// so here is the sequence that how the function will run 
//all function are executing"
//("the third function the upper line excute first then me");
//console.log("the second function will execute first ill execute later");

// the last on who goes into the stack will comes first the one by one it will get back 