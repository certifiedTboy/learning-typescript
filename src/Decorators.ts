//TYPESCRIPT DECORATORS
//decorators are used for meta programming

//Class decorators 


// function Logger (constructor: Function) {
//     console.log("Logging...")
//     console.log(constructor)
// }

// @Logger 
// class People {
//     name = "Tosin";

//     constructor() {
//         console.log("Creating person object")
//     }
// }

// const person = new People()

// console.log(person)


// Decorator Factories
function Logger (logString: string) {
    return function (constructor: Function){
        console.log(logString)
        console.log(constructor)
    }
}

function WithTemplate(template: string, hookId: string){
    return function(constructor: any){
            const hookElement = document.getElementById(hookId)
            
            const p = new constructor()

            if(hookElement){
                hookElement.innerHTML = template
                hookElement.querySelector("h1")!.textContent = p.name
            }
        }
}

//Using multiple decorators
@Logger("Loggin")
@WithTemplate("<h1> My Person Object <h1/>", "app")
class People {
    name = "Tosin";

    constructor() {
        console.log("Creating person object")
    }
}

const person = new People()

console.log(person)