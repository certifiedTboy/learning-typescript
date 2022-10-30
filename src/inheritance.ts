// // typescript class inheritance
// class Department {
//     //static properties 
//     static fiscalYear = 2022
//     // private id: string
//     // private name: string;
//     // private employees: string[] = []
//     protected employees: string[] = []

//     constructor(private readonly id: string, public name: string) {
      
//     }

//     // typescript static properties
//     // helps creating methods available without calling the instance of the class
//     static createEmployee(name:string){
//         return {name:name}
//     }

//     describe (this: Department) {
//         console.log(`Id: ${this.id} Department: ${this.name}`)
//     }

//     addEmployee(employee: string){
//         this.employees.push(employee)
//     }

//     printEmployeeInformation() {
//         console.log(this.employees.length)
//         console.log(this.employees)
//     }
// }




// class ITDepartment extends Department {
//     admins: string[]
//  constructor(id: string,  admins: string[]) {
//     super(id, "IT Department")
//     this.admins = admins
//  }
// }

// class AccountingDepartment extends Department {
//     // typescript setters and getters methods
//     private lastReport: string

//     get mostRecentReport() {
//         if(this.lastReport){
//             return this.lastReport
//         }
//         throw new Error("No report found")
//     }

//     // typecript setter method
//     set mostRecentReport (value:string) {
//         if(!value){
//             throw new Error("please pass a value")
//         }
//         this.addReport(value)
//     }


//     constructor(id:string, private reports: string[]){
//         super(id, "Accounting Department")
//         this.lastReport = reports[0]
//     }

//     // adding more methods to inheritance
//     // previous methods inherited can be modified

//     addEmployee(employee: string): void {
//         if(employee === "Max"){
//             return 
//         }
//         // the employees property can be changed from private to protected to be accesed in inherited classes
//         this.employees.push(employee)
//     }

//     addReport(text:string){
//         this.reports.push(text)
//         this.lastReport = text
//     }

//     printReports(){
//         console.log(this.reports)
//     }
    
// }


// // executing static methods in classes
// const employee1 = Department.createEmployee("Adebisi")
// console.log(employee1, Department.fiscalYear)

// //it department inheritance
// // const it = new ITDepartment("d1", ["Tosin"])
// // it.addEmployee("Tosim")
// // it.addEmployee("Joseph")
// // it.printEmployeeInformation()
// // it.describe()
// // console.log(it)


// // const accounting = new AccountingDepartment("d1", [])



// // //executing gettter method 
// // accounting.mostRecentReport = "Year end report"
// // // accounting department inheritance
// // accounting.addReport("another report")
// // accounting.addEmployee("Max")
// // accounting.addEmployee("Yusuf")
// // accounting.printReports()

// // // executing getter method
// // console.log(accounting.mostRecentReport)
// // console.log(accounting)