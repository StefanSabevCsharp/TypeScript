import { Drink } from "../Drink/drink";

export class VendingMachine {
    buttonCapacity: number;
    drinks: Drink[];
    //Както ми беше казано във slido, getCount трябва да е пропърти, а не метод.
    getCount: number = 0;

    constructor(buttonCapacity: number) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }

    addDrink(drink: Drink): void {
        if (this.buttonCapacity > this.drinks.length) {
            this.drinks.push(drink);
            this.getCount++;
        }
    }
    removeDrink(name: string): boolean {
        const index: number = this.drinks.findIndex((d) => d.name === name);
        if (index !== -1) {
            this.drinks.splice(index, 1);
            this.getCount--;
            return true;
        }
        return false;
    }
    getLongest(): string {
        const longestDrink: Drink = this.drinks.reduce((a, b) =>
            a.volume > b.volume ? a : b
        );
        return longestDrink.toString();
    }
    getCheapest(): string {
        const cheapestDrink: Drink = this.drinks.reduce((a, b) =>
            a.price < b.price ? a : b
        );
        return cheapestDrink.toString();
    }
    buyDrink(name: string): string {
        const drink: Drink = this.drinks.find((d) => d.name === name);
        return drink.toString();
    }
    //Беше ми казано във slido, че getCount() трябва да е пропърти, а не метод,кактo е в условието.
    //За това закоментирах метода и го направих пропърти.

    // getCount(): number {
    //     return this.drinks.length;
    // }
    report(): string {
        let result: string = "Drinks available: \n";
        this.drinks.forEach((d) => (result += d.toString() + "\n"));
        return result.trim();
    }
}
