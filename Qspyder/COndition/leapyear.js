// WAP to check whether a year is leap year or not
function LeapY(year){
    if(year%4==0 && year%100!=0 || year%400==0){
        return "Leap Year"
    }
    else{
        return "Not Leap Year"
    }

}
console.log(LeapY(2020))