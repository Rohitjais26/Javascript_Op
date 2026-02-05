let random = Math.random()

let correctOtp = 1234;

let finalOtp;

if(random <0.9){
    finalOtp = Math.floor( 1000 + Math.random()*9999)
}
// Math.floor() to remove the decimals
//Math.random() * 9000 → number between 0 and 8999
//+ 1000 → ensures 4 digits


else{
    finalOtp = correctOtp
}

alert("Your OTP is " + finalOtp)


console.log("Random:", random)
console.log("OTP:", finalOtp)