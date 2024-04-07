class Cat {

    constructor(public name: string, public age: number) {
        this.name = name;
        this.age = age;
     }
    meow(): string{
        return `${this.name},age ${this.age} says Meow!`;
    }
}

function catCreator(array: string[]):void{
    for (const cat of array) {
        let name: string = cat.split(" ")[0];
        let age: number = Number(cat.split(" ")[1]);
        let newCat  = new Cat(name,age);
        console.log(newCat.meow());
    }
}

catCreator(["Mellow 2","Tom 5"]); // Mellow,age 2 says Meow! Tom,age 5 says Meow!