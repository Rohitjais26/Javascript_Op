//Filter even numbers from an array in faulty way

let numbers = [1, 2, 3, 4, 5, 6];
let random = Math.random();

let result = numbers.filter ((num)=> {

  // Faulty behavior (70%)
  if (random < 0.7) {
    return num % 2 !== 0; // keeps odd numbers (wrong)
  }

  // Correct behavior (30%)
  return num % 2 === 0;
});

console.log("Random value:", random);
console.log("Filtered result:", result);
