//Wriet  a Program to fing the largest of two numbers

function Largest(a,b){
    if (a>b){
        return a
    }
    else{
        return b
    }

}
console.log(Largest(10,20))

//WAP to find the largest of three numbers

function LargestOfThree(a,b,c){
    if (a>b && a>c){
        return a
    }
    else if (b>a && b>c){
        return b
    }
    else{
        return c
    }
}
console.log(LargestOfThree(100,20,30))