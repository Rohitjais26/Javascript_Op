console.log("my name is rohit")
console.log("my name is ronny")

setTimeout(() => {
    console.log("time is out")

}, 2000);

console.log("thee end")


const loadscript = (src , callback) =>{
    let sc = document.createElement("script")
    sc.src =src
    sc.onload = callback("rohit")
    

}