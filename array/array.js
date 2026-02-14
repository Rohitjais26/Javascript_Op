let arr = [1,3,5,6,8]
console.log(arr)
console.log(arr[0])            //indexing the array //
arr[1] = 9                      //replacing the index 1 by 9//

//pop element //
arr.pop(8)
console.log(arr)

//push element //
arr.push(2)
console.log(arr)

let newarr = []
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newarr.push(element**2)
}
console.log(newarr)



//var a = 7
//console.log(a)

let o = {
    name : "Rohit",
    "phone_number" : 91


}

console.log(o)