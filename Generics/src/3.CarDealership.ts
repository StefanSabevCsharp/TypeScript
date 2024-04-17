interface Dealership<T> {
    dealershipName: T;
    soldCars: number;
}

interface Actions {
    sellCar(dealerID: string, model: string): void;
}

class CarDealer<T> implements Dealership<T>, Actions  {
    dealershipName: T;
    soldCars: number = 0;
    modelsSold = {};

    constructor(dealershipName: T) {
        this.dealershipName = dealershipName;
    }

    sellCar(dealerID: string, model: string): void {
        this.modelsSold[dealerID] = model;
        this.soldCars++;
    }
    showDetails(): string {
        let details = `${this.dealershipName}:\n`;
        for (const dealerID in this.modelsSold) {
            details += `${dealerID} sold ${this.modelsSold[dealerID]}\n`;
        }
        return details.trim();
    }
}

let dealership = new CarDealer("SilverStar");

dealership.sellCar("BG01", "C Class");
dealership.sellCar("BG02", "S Class");
dealership.sellCar("BG03", "ML Class");
dealership.sellCar("BG04", "CLK Class");
console.log(dealership.showDetails());
