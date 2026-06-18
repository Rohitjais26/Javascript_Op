// To

console.log("1 Line")
setTimeout(()=>{
    console.log("I will Exacute After 2 second")

},2000)

console.log("2 line")

//

setInterval(() => {
    console.log("I will execute agian and agian")
},2000);


let count = 0;

let timer = setInterval(()=>{
    count++;
    console.log(count)

    if(count>=5){
        clearInterval(timer)
        console.log("execution completed")
    }

},3000)