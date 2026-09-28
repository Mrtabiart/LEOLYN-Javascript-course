// heap in javascript 

var num1 = 1; //allocate the memory for the num
var str1 = "Hello User"; // allocate memory for this string
//allocate memory for this object

var obj = {
    first:'leo',
    last:'lyn'
}

//allocate to the function
function addOne(a){
    return a+1;
}

function display(result){
    console.log(result)
}


//calll stack work here and then the heap works
addOne();
