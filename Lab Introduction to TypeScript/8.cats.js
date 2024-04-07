class Cat {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    meow() {
        return `${this.name},age ${this.age} says Meow!`;
    }
}
function catCreator(array) {
    for (const cat of array) {
        let name = cat.split(" ")[0];
        let age = Number(cat.split(" ")[1]);
        let newCat = new Cat(name, age);
        console.log(newCat.meow());
    }
}
catCreator(["Mellow 2", "Tom 5"]); // Mellow,age 2 says Meow! Tom,age 5 says Meow!
