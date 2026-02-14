// Print Factorial 

function factorial(n){
    let arr = Array.from(Array(n+1).keys())
    let newarr = arr.slice(1).reduce((a,b)=> a*b)
    return newarr
}
console.log(factorial(5))




// Function bana rahe hain jiska naam factorial hai
// Yeh function ek number n lega aur uska factorial return karega
function factorial(n){

    // Array.from() ek naya array banata hai
    // Array(n+1) ek empty array banata hai jisme n+1 slots hote hain
    // .keys() us array ke indexes return karta hai (0 se n tak)
    // Example: n = 5 → [0, 1, 2, 3, 4, 5]
    let arr = Array.from(Array(n+1).keys())

    // arr.slice(1) se pehla element (0) hata dete hain
    // Kyunki factorial me 0 se multiply karenge toh result 0 ho jayega
    // Example: [0,1,2,3,4,5] → [1,2,3,4,5]

    // .reduce((a,b) => a*b)
    // reduce array ke saare numbers ko multiply karta hai
    // a = accumulator (previous result)
    // b = current value
    // Example:
    // 1*2=2
    // 2*3=6
    // 6*4=24
    // 24*5=120
    let newarr = arr.slice(1).reduce((a,b)=> a*b)

    // Final multiplication result return kar diya
    return newarr
}

// Function ko call kar rahe hain with value 5
// 5! = 5×4×3×2×1 = 120
console.log(factorial(5))
