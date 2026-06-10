const user = () => ({
    name:"Rohit",
    age: 22
})

console.log(user())

//Arrow Function Inside for Loop
// Square of numbers

const sqr = x =>
     x*x

for(i=1;i<=5;i++){
    console.log(sqr(i))
}

//Create a new array with double values.(using map)

const arr = [10,20,30,40]

const double = arr.map (num=>num*2)

console.log(double)