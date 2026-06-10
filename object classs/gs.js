console.log("rohit")

class user{
    constructor(name){
        this.name = name;
    }
    get name(){
        return this.name;
}
    set name(name){
        if(name.length >= 5){
            this.name = name;
        }else{
            console.log("Name should be at least 5 characters long")
        }
    }


}

let user1 = new user("rohit");
 console.log(user1.name); // rohit
 user1.name = "rohit123";
 console.log(user1.name); // rohit123
user1.name = "rohit"; // Name should be at least 5 characters long