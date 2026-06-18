// Questions on map() method

//1. Multiply every number in array by 2
arr1= [1,2,3,4,5]
let multiply = arr1.map((items)=>{
    return items*2
})
console.log(multiply) 

//2.add 10 marks in every students marks
let marks = [50,60,70,80,90]
let addMarks = marks.map((items)=>{
    return items+10
})
console.log(addMarks)

//3.Finding the sum of all the numbers in array
let arr = [10,20,30,40,50]
let sum = arr.reduce((acc,items)=>{
    return acc+items

},0)