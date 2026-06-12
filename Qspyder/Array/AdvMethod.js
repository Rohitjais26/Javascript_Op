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


// Questions on Methods

//Cube Every Number (using only .map() method)
let nums = [1,2,3,4,5]
let cube = nums.map((items)=>{
    return items*3
})
console.log(cube)                                   // [3,6,9,12,15]

//2. Subtract 2 from every number (using only .map() method)
let subtract = nums.map((items)=>{
    return items-2
})
console.log(subtract)

//3.Averege of all the numbers (using only .reduce() method)
let sum = nums.reduce((acc,items)=>{
    return acc+items

} ,0)
let average = sum/nums.length
console.log(average) // 3

//4. Find the Smallest number (using only .reduce() method)
let smallest = nums.reduce((acc,items)=>{
    return Math.min(acc,items)

})
console.log(smallest) 

//5.Number between 10 to 30 (using only .filter() method)
let num2 = [5,10,15,20,25,30,35]
let between = nums2.filter((items)=>{
    return items >10 && items<30
})
console.log(between) // [15,20,25]

//6.Number Greater Than 30 (using only .filter() method)
let greater = nums2.filter((items)=>{
    return items>30
})
console.log(greater) // [35]

//7.Square even numbers and find sum
let sumOfSquare = nums.reduce((acc,items)=>{
    if(items%2 === 0){
        return acc + items*items
    }   
    return acc
} ,0)
console.log(sumOfSquare) // 20

//8.Double the even numbers
let doubleEven = nums.map((items)=>{
    if(items%2 === 0){
        return items*2
    }
    return items
})
console.log(doubleEven) // [2,4,6,8,10]