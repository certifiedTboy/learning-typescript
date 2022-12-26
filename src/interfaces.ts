// //typescript interfaces
// // an interface in typescript describes the structure of an object

// // difference between custom type and interface
// // interfaces can be use to describe the structure of an object
// // while custome types can also be used for same, you can also store other things like union types
// // interfaces are a bit flexible compare to custom types 
// // interfaces are used to share functionalities amongst classes not regardong their concrete implementations

// interface Greetable {
//     // name: string;

//     // readonly property in interfaces
//     readonly name: string;

//     greet(phrase: string): void;
// }

// // contrasting an interface with class
// class Person implements Greetable {
//     name: string;
//     age = 24

//     constructor(n: string){
//         this.name = n
        
//     }

//     greet(phrase: string): void {
//         console.log(phrase + " " + this.name)
//     }
// }

// let user1: Greetable ;


// user1 =  new Person("Tosin")
// user1.greet("hello there")
// console.log(user1)