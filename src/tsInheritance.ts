//typescript interface inheritance
// unlike classes, interfaces can inherit from multiple interfaces
// interfaces can also be used to define the structure of a function

// type AddFn = (a: number, b: number) => number

interface AddFn {
    (a: number, b: number): number
}

let addNum: AddFn

addNum = (n1: number, n2: number) => {
    return n1 + n2
}


interface Named {
   readonly name: string; 

// optional properties in interfaces
   outputName?: string
}

interface Greetable extends Named {

    greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;
    age = 24
    
    constructor(n: string){
        this.name = n
        
    }

    greet(phrase: string): void {
        console.log(phrase + " " + this.name)
    }
}

let user1: Greetable ;


user1 =  new Person("Tosin")
user1.greet("hello there")
console.log(user1)