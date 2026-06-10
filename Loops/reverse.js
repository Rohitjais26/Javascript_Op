// Reverse the given number

let num = 1234;
let reverse = 0;

for (; num > 0; num = Math.floor(num / 10)) {
  reverse = reverse * 10 + (num % 10);
}

console.log(reverse);

// (num /10 ) is use to insert new digit
// (num % 10) is used to remove the last digit number 


// Original number jise reverse karna hai
//let num = 1234;

// Yaha reversed number store hoga
//let reverse = 0;

// Loop tab tak chalega jab tak num 0 se bada hai
while (num > 0) {

  // Step 1: Last digit nikaal rahe hain
  // Example: 1234 % 10 = 4
  let digit = num % 10;

  // Step 2: Reverse number ko left shift karte hain (×10)
  // Phir new digit add karte hain
  // Example:
  // 0*10 + 4 = 4
  // 4*10 + 3 = 43
  reverse = reverse * 10 + digit;

  // Step 3: Last digit remove kar rahe hain
  // Example: Math.floor(1234 / 10) = 123
  num = Math.floor(num / 10);
}

// Final reversed number print kar rahe hain
console.log(reverse);
