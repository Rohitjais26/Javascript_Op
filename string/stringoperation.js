// Store first name
let firstname = "  Rohit  ";

// Store last name
let lastname = "jaiswal";

// Print full name using template literal
console.log(`My name is ${firstname.trim()} ${lastname}`);


//  Convert to UPPERCASE
console.log(firstname.toUpperCase()); 
// Output: "  ROHIT  "


//  Convert to lowercase
console.log(firstname.toLowerCase());
// Output: "  rohit  "


//  Remove extra spaces from start and end
console.log(firstname.trim());
// Output: "Rohit"


//  Get character at index 1
// Index starts from 0
console.log(firstname.charAt(1));
// Output: " "


//  Find index of a character
console.log(firstname.indexOf("h"));
// Output: 3


//  Get total length of string
console.log(firstname.length);
// Output includes spaces


//  Extract part of string using substring
console.log(firstname.substring(2, 6));
// Output: "Rohi"


//  Extract part of string using slice
console.log(firstname.slice(2, 6));
// Output: "Rohi"


//  Replace a word
console.log(firstname.replace("Rohit", "Harsh"));
// Output: "  Harsh  "


// Check if string includes a character
console.log(firstname.includes("o"));
// Output: true


//  Repeat the string
console.log(firstname.trim().repeat(2));
// Output: "RohitRohit"


//  Split string into array
let nameArray = firstname.trim().split("");
console.log(nameArray);
// Output: ["R","o","h","i","t"]


//  Join array back into string
console.log(nameArray.join("-"));
// Output: "R-o-h-i-t"


//  Get first character
console.log(firstname.trim()[0]);
// Output: "R"


//  Get last character
let cleanName = firstname.trim();
console.log(cleanName[cleanName.length - 1]);
// Output: "t"
