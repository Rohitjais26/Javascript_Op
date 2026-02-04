// Generating Factorial using for Loop

let n = 5
let a= 0
let b = 1

for(i=0;i<=n;i++){
    console.log(a)
    let next = a+b
    a = b
    b = next
}
console.log(i)


// Factorial Logic is 
// next = first + second