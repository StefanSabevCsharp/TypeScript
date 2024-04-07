class Employee {
    name;
    personalNumber;
    constructor(name) {
        this.name = name;
        this.name = name;
        this.personalNumber = name.length;
    }
    printEmployee() {
        return `Name: ${this.name} -- Personal Number: ${this.personalNumber}`;
    }
}
function employeeCreator(array) {
    for (const employee of array) {
        let name = employee;
        let newEmployee = new Employee(name);
        console.log(newEmployee.printEmployee());
    }
}
employeeCreator([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);
