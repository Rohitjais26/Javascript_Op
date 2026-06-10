console.log("rohit is web development")

class animal{
    constructor(name){
        this.name = name 
         console.log("class ban gya ")
        }
    eat(){
        console.log("khana ban gya ")
    }
    jump(){
        console.log("kood gya hai")

    }   
}

class lion extends animal{
    constructor(name,color){
        super(name)
        this.color = color
        console.log("lion ban gya ")
    }
    eat(){
        console.log("khana ban gya roar ")
    }
}

let l = new lion ("shera" ,"yellow")
    console.log(l)

let a =  new animal("bunny");
console.log(a);
