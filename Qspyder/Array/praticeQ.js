//COnditional statement

//check if the number is positive ,negative or zero
let num = 10
if (num>0){
    console.log(num + " is a positive number")
}
else if (num = 0){
    console.log(num + " is zero")
}
else{
    console.log(num + " is a negative number")
}

//check wheather the person is eligible to vote or not
function checkEligibility(age){
    if (age>18){
        return "You are eligible to vote"
    }
    else{
        return "You are not eligible to vote"
    }
}
console.log(checkEligibility(20)) // You are eligible to vote
console.log(checkEligibility(15)) // You are not eligible to vote

//find the greatest between two numbers
function findGreatest(num1,num2){
    if (num1>num2){
        return num1 + " is greater than " + num2
    }
    else{
        return num2 + " is greater than " + num1
    }
}
console.log.log(findGreatest(10,20)) 

//Check wheather the number is even or odd
function EvenOdd(num){
    if(num%2 === 0){
        return num + " is an even number"
    
    }
    else{
        return num + " is an odd number"
    }
}
console.log(EvenOdd(10)) 

//check wheather the student has paseed (marks>=35)
function result(marks){
    if(marks>=35){
        return "You have passed the exam"
    }
    else{
        return "You have failed the exam"
    }
}
console.log(result(40)) 

//Find the largest among the three numbers
function Largest(num1,num2,num3){
    if (num1>num2 &&num1>num3){
        return num1 + " is the largest number"
    }
    else if (num2>num1 &&num2>num3){
        return num2 +" is the largest number"
    }
    else{
        return num3 + " is the largest number"
    }
}
console.log(Largest(10,20,30))

