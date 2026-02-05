// Making a Faulty Calculator that are mostly asked Question in interview

let random = Math.random()    //Math.random() gives a random number between 0 and 1

let a = Number(prompt("Enter the first Number"))   //Number()  Converts text into number
let op = prompt("Enter the opertion")
let b = Number(prompt("Enter the second Number"))


let faulty = {
    "+":"-",
    "-":"+",
    "/":"*",
    "*":"/"

}

let finalOp;

// 90% of time calculator become faulty
if (random <0.9){
    finalOp = faulty[op]    //faulty[op] = Gets value from object
}
else{
    finalOp = op
}

let result;

if(finalOp === "+"){
    result = a+b
}
else if(finalOp === "-"){
    result = a-b
}
else if(finalOp === "*"){
    result = a*b
}
else{
    result = a/b
}

alert("Result : " + result )

