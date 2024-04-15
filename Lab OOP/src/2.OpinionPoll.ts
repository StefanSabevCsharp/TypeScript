class Person {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }
    printPerson(): void {
        console.log(`${this._name} is ${this._age} years old`);
    }
}

let Person1 = new Person("John", 30);
Person1.printPerson();