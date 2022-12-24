// typescript Type casting
// const userInputElement = <HTMLInputElement>document.getElementById("user-input")!

// const userInputElement = document.getElementById("user-input")! as HTMLInputElement;

// userInputElement.value = "Hi there"


//alternatively
const userInputElement = document.getElementById("user-input");

if(userInputElement){
    (userInputElement as HTMLInputElement).value = "Hi there"
}

const result = addNumber("Tosin", "Adebisi") as string
result.split(" ")

interface ErrorContainer {
    [prop: string] : string;
}

const errorBag: ErrorContainer = {
    email: "Not a valid email",
    username: "Must start with a capital character"
}; 


// typescript function overload

type Admin = {
    name: string;
    privileges: string[]
}

type Employee = {
    name: string;
    startDate: Date
}



type ElevatedEmployee = Admin & Employee


const e1: ElevatedEmployee = {
    name: "Tosin", 
    privileges: ["create-server"], 
    startDate: new Date()
}


type Combinable = string | number;
type Numeric = number | boolean

type Universal = Combinable & Numeric

// typescript type guard 
function addNumber(a: Combinable, b: Combinable){
    if(typeof a === "string" || typeof b === "string"){
        return a.toString() + b.toString()
    }   
    return a + b
 
}

const result2 = addNumber(1, 5)

// OPTIONAL CHAINING
const fetchUserData = {
    id: "u1", 
    name: "Tosin", 
    job: {title: "CEO", description:"My own company"}
}

console.log(fetchUserData?.job?.title)


// nulish Coalescing
// const userInput = null

// const storedData = userInput || "DEFAULT"

// const userInput = " "
const userInput = undefined 

const storedData = userInput ?? "DEFAULT"