// Questions for while Loop

// Print 10 to 1
/*
let i = 10 
while(i>=1){
    console.log(i)
    i--;
}
*/
//Numbers divisible by 3 (1–30)
/*
let i = 1
while(i<=30){
    if(i%3==0){
        console.log(i)
    }
    i++
}
    */

//Count numbers divisible by 5 (1–100)
/*
let i= 1
let count = 0 
while(i<=100){
    if(i%5==0){
        count++
        
    }
    i++
}
console.log(count)
*/

//Print even numbers between 1 and 10
/*
let i = 1
while(i<=10){
    if(i%2==0){
        console.log(i)
    }
    i++
}*/

//Find the sum of numbers from 1 to 10

let i=1
let sum =0
while(i<=10){
    sum = sum +i
    i++
}
console.log(sum)
