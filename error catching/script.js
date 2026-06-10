let a = prompt("enter the first number")
let b = prompt("enter the second number")

let sum = parseInt(a) + parseInt(b);      //convert to integer
if(isNaN(a) || isNaN(b)){                     //if the a and b are not the number 
   throw SyntaxError("Please enter the valid number ")
}


let x = 5 
function main(){
try {                                          // check 
    console.log("result" , sum*x);
    return true
} catch (error) {                              //if the error occured
    console.log("error hane occur")
    return false
}
finally{
    console.log("process ended");
}
}

let c = main()
