class Employee {

    public personalNumber: number;
    
    constructor(public name: string) {
        this.name = name;
        this.personalNumber = name.length;
    }
    printEmployee(): string{
        return `Name: ${this.name} -- Personal Number: ${this.personalNumber}`;
    }
}

function employeeCreator(array: string[]):void{
    for (const employee of array) {
        let name: string = employee;
        let newEmployee  = new Employee(name);
        console.log(newEmployee.printEmployee());
    }
}

employeeCreator([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )