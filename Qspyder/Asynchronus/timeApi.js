// // To understand the Asynchronus in JavaScript we have to understand the concept of Event Loop and Call Stack.

// console.log("1 Line")
// setTimeout(()=>{
//     console.log("I will Exacute After 2 second")

// },2000)

// console.log("2 line")

// // TO learn about setInterval and clearInterval we have to understand the concept of Asynchronus in JavaScript.

// setInterval(() => {
//     console.log("I will execute agian and agian")
// },2000);


// let count = 0;

// let timer = setInterval(()=>{
//     count++;
//     console.log(count)

//     if(count>=5){
//         clearInterval(timer)
//         console.log("execution completed")
//     }

// },3000)



// tasks
// 1. Print hello world after 3 second

// setTimeout(()=>{
//     console.log("Hello World")
// },3000)

// Countdown from 10 to 1

let count =10;
let timer = setInterval(()=>{
    console.log(count)
    count--;

    if (count<1){
        clearInterval(timer)
        console.log("execution completed")
    
    }

},2000)

// OTP expiry timeout
let countdown = 15

let otpTimer = setInterval(()=>{
    console.log(countdown)
    countdown--;

    if (countdown<1){
        clearInterval(otpTimer)
        console.log("OTP Expired")
    }
},1000)