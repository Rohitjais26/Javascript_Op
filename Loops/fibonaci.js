// Generating Fibonaci using for Loop

let n = 5     // how much number we want 
let a= 0      //first number
let b = 1     //second number

for(i=0;i<=n;i++){
    console.log(a)
    let next = a+b
    a = b
    b = next
}
console.log(i)


// Fibonaci Logic is 
// next = first + second