"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    buttonCapacity;
    drinks;
    //Както ми беше казано във slido, getCount трябва да е пропърти, а не метод.
    getCount = 0;
    constructor(buttonCapacity) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }
    addDrink(drink) {
        if (this.buttonCapacity > this.drinks.length) {
            this.drinks.push(drink);
            this.getCount++;
        }
    }
    removeDrink(name) {
        const index = this.drinks.findIndex((d) => d.name === name);
        if (index !== -1) {
            this.drinks.splice(index, 1);
            this.getCount--;
            return true;
        }
        return false;
    }
    getLongest() {
        const longestDrink = this.drinks.reduce((a, b) => a.volume > b.volume ? a : b);
        return longestDrink.toString();
    }
    getCheapest() {
        const cheapestDrink = this.drinks.reduce((a, b) => a.price < b.price ? a : b);
        return cheapestDrink.toString();
    }
    buyDrink(name) {
        const drink = this.drinks.find((d) => d.name === name);
        return drink.toString();
    }
    //Беше ми казано във slido, че getCount() трябва да е пропърти, а не метод,кактo е в условието.
    //За това закоментирах метода и го направих пропърти.
    // getCount(): number {
    //     return this.drinks.length;
    // }
    report() {
        let result = "Drinks available: \n";
        this.drinks.forEach((d) => (result += d.toString() + "\n"));
        return result.trim();
    }
}
exports.VendingMachine = VendingMachine;
