//typescript abstract class
abstract class Department {
    static fiscalYear = 2022
    protected employees: string[] = []

    constructor(protected readonly id: string, public name: string) {
      
    }

    static createEmployee(name:string){
        return {name:name}
    }

    // typescript abstract method implmentation
   abstract describe(this: Department): void;

    addEmployee(employee: string){
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}


class AccountingDepartment extends Department {
    private lastReport: string
    private static instance: AccountingDepartment 
    
    get mostRecentReport() {
        if(this.lastReport){
            return this.lastReport
        }
        throw new Error("No report found")
    }

    set mostRecentReport (value:string) {
        if(!value){
            throw new Error("please pass a value")
        }
        this.addReport(value)
    }

    //singletons && private contructors
    //ensures only one instance of a class can be created
    private constructor(id:string, private reports: string[]){
        super(id, "Accounting Department")
        this.lastReport = reports[0]
    }

    static getInstance () {
        if (AccountingDepartment.instance){
            return this.instance
        }

        this.instance = new AccountingDepartment("d1", [])
        return this.instance
    }

    addEmployee(employee: string): void {
        if(employee === "Max"){
            return 
        }
      
        this.employees.push(employee)
    }

    addReport(text:string){
        this.reports.push(text)
        this.lastReport = text
    }

    printReports(){
        console.log(this.reports)
    }

    describe() {
        console.log("Accounting Department " +  "ID - " + this.id)
    }
    
}

// const accounting = new AccountingDepartment("d1", [])

// singleton private constructor execution
const accounting = AccountingDepartment.getInstance()
console.log(accounting)
accounting.describe()

