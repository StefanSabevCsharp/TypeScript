class Animal {
    eat(): void {
        console.log('Eating');
    }
}

class Dog extends Animal{
    bark(): void {
        console.log('Barking');
    }
}
class Cat extends Animal{
    meow(): void {
        console.log('Meowing');
    }
}

let dog = new Dog();
dog.bark();
dog.eat();
