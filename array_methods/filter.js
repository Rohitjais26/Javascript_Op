//Get Even Numbers

let arr1 = [2,3,4,5,6,8]

let filterresult = arr.filter((e)=>{
    return e%2==0
}) 
console.log(filterresult)


//Numbers Greater Than 10

let arr = [5, 12, 8, 20, 3];

let result1 = arr.filter((num)=> {
  return num > 10;
});

console.log(result1);


//Filter Long Words

let word = ["hello","the","world","sit"]

let shortword = word.filter((alp)=>{
    return alp.length>3
})
console.log(shortword)

//Names Starting with "R"
let names = ["Rohit", "Aman", "Ravi", "Neha"];

let result = names.filter(function (name) {
  return name[0] === "R";
});

console.log(result);
