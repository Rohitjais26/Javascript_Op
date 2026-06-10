console.log("PROMISE")

let prom = new Promise((resolve, reject)=>{
    let a = Math.random()
    if ( a < 0.5){
        reject("not showing the value")

    }
    else{
        resolve("successfully")
    }
}
)

