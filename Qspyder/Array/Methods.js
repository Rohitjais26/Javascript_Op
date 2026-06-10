//Methods of Array

arr = [10,20,30,40,50,60]
// push() method - add element at the end of Array
arr.push(70)
//console.log(arr)

//pop() method - remove the last element of Array
arr.pop()
//console.log(arr)

// unshift() method - add element at the beginning of Array
arr.unshift(9)
//console.log(arr)

// shift() method - remove the first element of Array
arr.shift()
//console.log(arr)

//reverse() method - reverse the Array
arr.reverse()
//console.log(arr)

//flat() method - merging the nested Array into single Array & it creates a new Array
let arr2 = [10,20,[30,40],50]
let result = arr2.flat()
console.log(result) // [10,20,30,40,50]

//includes() method - check the element is present in Array or not & it returns boolean value
console.log(arr.includes(30)) // true
console.log(arr.includes(100)) // false

//slice() method - it is used to extract a portion of Array & it creates a new Array
arr.slice(2,5)  // [30,40,50] - it will extract the element from index 2 to index 4 (5-1)
console.log(arr.slice(2,5))

//splice() method - it is used to add or remove element from Array & it modifies the original Array
arr.splice(2,0,25) // it will add 25 at index 2 & it will not remove any element
arr.splice(4,1) // it will remove 1 element from index 4
arr.splice(5,2,55)// it will remove 2 element from index 5 & it will add 55 at index 5
console.log(arr) // [10,20,25,30,40,50,60]

//toString() method - it is used to convert Array into String
let str = arr.toString()
console.log(str) // "10,20,25,30,40,50,60"
console.log(typeof str) // string
