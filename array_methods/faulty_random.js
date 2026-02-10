// Creating Faulty giving random number 

let arr = [2,3,4,5,6,7]
let random =  Math.random()

let fault = arr.map((num)=>{

    if(random < 0.8){
        return num*3
    }
    else{
        return num*2
    }
})

console.log("Random No.", random)
console.log("Final answer",fault)