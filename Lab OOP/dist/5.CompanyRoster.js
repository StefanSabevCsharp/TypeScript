class Employe {
    name;
    age;
    salary;
    position;
    department;
    email;
    constructor(name, salary, position, department, email = "n/a", age = -1) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.position = position;
        this.department = department;
        this.email = email;
    }
}
let departments = new Map();
function create(inputString) {
    const lines = inputString.split("\n");
    const numberOfEmployes = lines[0];
    let bestSalaryEmploye = { name: "", age: -1, salary: -1, position: "", department: "", email: "" };
    for (let index = 1; index < numberOfEmployes; index++) {
        const [name, salary, position, department, email, age] = lines[index].split(" ");
        const employe = new Employe(name, salary, position, department, email, age);
        if (employe.salary > bestSalaryEmploye.salary) {
            bestSalaryEmploye = employe;
        }
        if (!departments.has(department)) {
            departments.set(department, [employe]);
        }
        else {
            let currentEmployees = departments.get(department);
            currentEmployees.push(employe);
        }
    }
    // let bestDepartment : Department = departments.get(bestSalaryEmploye.department);
    const employes = departments.get(bestSalaryEmploye.department);
    console.log(`Highest Average Salary: ${bestSalaryEmploye.department}`);
    employes.sort((a, b) => b.salary - a.salary).forEach(employe => {
        console.log(`${employe.name} ${employe.salary} ${employe.email} ${employe.age}`);
    });
}
create("4\nPeter 120.00 Dev Development peter@abv.bg 28\nTina 333.33 Manager Marketing 33\nSam 840.20 ProjectLeader Development sam@sam.com\nGeorge 0.20 Freeloader Nowhere 18");
//# sourceMappingURL=5.CompanyRoster.js.map