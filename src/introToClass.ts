// typescript class && OOP
class Department {
    // name: string;
    // typescript public properties || field
//   employees: string [] = []

    //typescript private properties / field
    // private id: string
    // private name: string;
    private employees: string[] = []

    //typescript readOnly properties
    constructor(private readonly id: string, public name: string) {
        //  this.name = name
        //  this.id = id
    }

    describe (this: Department) {
        console.log(`Id: ${this.id} Department: ${this.name}`)
    }

    addEmployee(employee: string){
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}


const accounting = new Department("d1", "Accounting")

accounting.addEmployee("Tosim")
accounting.addEmployee("Joseph")
accounting.printEmployeeInformation()

// accounting.addEmployee[2] = "Anna"

console.log(accounting)


accounting.describe()

// const accountingCopy = {name:"DUMMY", describe: accounting.describe }

// accountingCopy.describe()


