// Store first name
let firstname = "  Rohit  ";

// Store last name
let lastname = "jaiswal";

// Print full name using template literal
console.log(`My name is ${firstname.trim()} ${lastname}`);


// 1️⃣ Convert to UPPERCASE
console.log(firstname.toUpperCase()); 
// Output: "  ROHIT  "


// 2️⃣ Convert to lowercase
console.log(firstname.toLowerCase());
// Output: "  rohit  "


// 3️⃣ Remove extra spaces from start and end
console.log(firstname.trim());
// Output: "Rohit"


// 4️⃣ Get character at index 1
// Index starts from 0
console.log(firstname.charAt(1));
// Output: " "


// 5️⃣ Find index of a character
console.log(firstname.indexOf("h"));
// Output: 3


// 6️⃣ Get total length of string
console.log(firstname.length);
// Output includes spaces


// 7️⃣ Extract part of string using substring
console.log(firstname.substring(2, 6));
// Output: "Rohi"


// 8️⃣ Extract part of string using slice
console.log(firstname.slice(2, 6));
// Output: "Rohi"


// 9️⃣ Replace a word
console.log(firstname.replace("Rohit", "Harsh"));
// Output: "  Harsh  "


// 🔟 Check if string includes a character
console.log(firstname.includes("o"));
// Output: true


// 1️⃣1️⃣ Repeat the string
console.log(firstname.trim().repeat(2));
// Output: "RohitRohit"


// 1️⃣2️⃣ Split string into array
let nameArray = firstname.trim().split("");
console.log(nameArray);
// Output: ["R","o","h","i","t"]


// 1️⃣3️⃣ Join array back into string
console.log(nameArray.join("-"));
// Output: "R-o-h-i-t"


// 1️⃣4️⃣ Get first character
console.log(firstname.trim()[0]);
// Output: "R"


// 1️⃣5️⃣ Get last character
let cleanName = firstname.trim();
console.log(cleanName[cleanName.length - 1]);
// Output: "t"
