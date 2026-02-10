//Find Sum

let arr = [10,20,30,40]
let sum = arr.reduce((pre,curr)=>{
    return pre + curr
},0)
console.log(sum)

//Find Maximum Number

let arr2 = [2,4,6,8,5]
let max = arr2.reduce((a,b)=>{
    if(a>b){
        return a
    }
    else{
        return b
    }
})
console.log(max)


let arr3 = [1, 2, 3, 4, 6];

let count = arr3.reduce(function (total, num) {
  if (num % 2 === 0) {
    return total + 1;
  }
  return total;
}, 0);

console.log(count);
