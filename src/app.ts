//typescript interfaces
// an interface in typescript describes the structure of an object

interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
}


let user1: Person ;


user1 = {
    name: "Tosin",
    age: 24, 
    greet(phrase: string){
        console.log(`${phrase} ${this.name} ${this.age}`)
    }
}
user1.greet("hello there")