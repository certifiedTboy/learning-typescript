// //Typescript GENERICS
// const names: Array <string > = []

// const promise: Promise<any> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10)
//     }, 2000)
// })

// promise.then(data => {
//     data.split(" ")
// })


// function merge<T, U>(objS: T, objB: U){
//     return Object.assign(objS, objB)
// }


// const mergedObject = merge({name:"Tosin"}, {age: 24})

// function merge<U>(objA:object, objB: U) {
//     return Object.assign(objA, objB)
// }

// const mergeObj = merge({name:"Max", hobbies: ["Sports"]}, {age:30})


// console.log(mergeObj.age)


// Generic Types Contraint
// function merge<T extends object, U extends object>(objA:T, objB: U) {
//     return Object.assign(objA, objB)
// }

// const mergeObj = merge({name:"Max", hobbies: ["Sports"]}, {age:30})
// console.log(mergeObj.age)

// interface Lenghty {
//     length: number
// }


// function countAndDescribe<T extends Lenghty>(element: T){
//     let descriptionText = "Got no Value."
//     if(element.length === 0){
//         descriptionText = "Got 1 element."
//     }else if (element.length > 1){
//         descriptionText = "Got " + element.length + " elements"
//     }
//     return [element, descriptionText];
// }


// console.log(countAndDescribe("Hi there"))


// GENERIC CLASS

// class DataStorage <T extends string | number | boolean> {
//     private data: T[] = [];

//     addItem(item: T) {
//         this.data.push(item)
//     }

//     removeItem(item: T) {
//         if(this.data.indexOf(item) === -1){
//             return
//         }
//         this.data.splice(this.data.indexOf(item), 1)
//     }

//     getItems() {
//         return [...this.data]
//     }
// }


// const textStorage = new DataStorage <string>()

// textStorage.addItem("Max")
// textStorage.addItem("Tosin")
// textStorage.removeItem("Max")

// console.log(textStorage.getItems())

// const numberStorage = new DataStorage<number>()

// const objectStorage = new DataStorage<object>()


// objectStorage.addItem({name:"Tosin"})
// objectStorage.addItem({name:"Max"})

// const maxObject = {name:"Max"}
// objectStorage.removeItem(maxObject)

// console.log(objectStorage.getItems())

// GENERIC UTILITY 

// interface CourseGoal {
//     title: string;
//     description: string;
//     completeUntil: Date;
// }

// function createCourseGoal (title: string, description: string, date:Date): CourseGoal {
//     let courseGoal: Partial<CourseGoal> = {}

//     courseGoal.title = title
//     courseGoal.description = description
//     courseGoal.completeUntil = date

//     return courseGoal as CourseGoal
// }


// const names: Readonly <string[]> = ["Tosin", "Max"]

// names.push("Manu")