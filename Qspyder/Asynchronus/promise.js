//promise is a object which is used to handle asynchronous operations in javascript


// let ans = "NO"

// let mypromise = new Promise((resolve,reject)=>{
//     if(ans === "Yes"){
//         resolve("she said yes")
//     }
//     else{
//         reject("she siad no")
//     }
// })
// console.log(mypromise)
// mypromise.then((result)=>console.log(result)).catch((error)=>(console.log(error)))


// // login function using promise
// function Login(username,password){
//     return new Promise((resolve,reject)=>{
//         if(username === "admin" && password === 1234){
//             resolve("Login Success")

//         }
//         else{
//             reject("Login Failed")
//         }

//     })

// }
// Login("admin",1234).then(result=>console.log(result)).catch(error=>console.log(error))

//Food order using promise
//

// function FoodOrder(step){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(step)
//             resolve();
//         },2000)
//     })
// }
// FoodOrder("Order Placed")
// .then(()=> FoodOrder("Order Confirmed"))
// .then(()=> FoodOrder("Food is being prepared"))
// .then(()=> FoodOrder("Food is out for delivery"))
// .then(()=> FoodOrder("Food Delivered"))
// .catch(error=>console.log(error))





//Task to Perform
// 1. Movie Ticket Booking using promise
//check seat available
//if available then book the ticket
//else reject
function MovieTicket(seats){
    return new Promise((resolve,reject)=>{
        if(seats === "available"){
            resolve("Seats are Available")
        }
        else{
            reject("Seats Not Available")
        }

    })

}
MovieTicket("not available")
.then((result)=> console.log(result))
.catch((error)=>console.log(error))

//2. ATM Withdrawal using promise
//check balance
//if suffeicent balance then withdraw the amount
//otherwise reject

function ATMWithdrawal(balance,amount){
    return new Promise((resolve,reject)=>{
        if(balance>=amount){
            resolve("Withdrawal Successful")
        }
        else{
            reject("Insufficient Balance")
        }
    })
}
ATMWithdrawal(1000,500)
.then((result)=>console.log(result))
.catch((error)=>console.log(error))


//3. Fetch user data simulate using promise

function FetchUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            resolve({
                id : 1,
                name :"Rohit",
                age : 22})
        },2000)
    })
}
FetchUserData()
.then((result)=>console.log(result))
.catch((error)=>console.log(error))
