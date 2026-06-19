
let ans = "NO"

let mypromise = new Promise((resolve,reject)=>{
    if(ans === "Yes"){
        resolve("she said yes")
    }
    else{
        reject("she siad no")
    }
})
console.log(mypromise)
mypromise.then((result)=>console.log(result)).catch((error)=>(console.log(error)))