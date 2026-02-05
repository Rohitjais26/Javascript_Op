// Reverse the given number

let num = 1234;
let reverse = 0;

for (; num > 0; num = Math.floor(num / 10)) {
  reverse = reverse * 10 + (num % 10);
}

console.log(reverse);

// (num /10 ) is use to insert new digit
// (num % 10) is used to remove the last digit number 