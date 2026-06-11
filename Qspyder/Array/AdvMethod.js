// Advance methods of Array in Javascript

//.map() 
let arr = [5,6,9,2,4]
console.log(arr)

let result = arr.map((items)=>{
    return items*5

})
console.log(result) // [25,30,45,10,20]

//.filter() method - it is used to filter the element based on condition & it creates a new Array
let even = result.filter((items)=>{
    return items%2 === 0
})
console.log(even) // [30,10,20]


