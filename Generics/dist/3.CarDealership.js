class CarDealer {
    dealershipName;
    soldCars = 0;
    modelsSold = {};
    constructor(dealershipName) {
        this.dealershipName = dealershipName;
    }
    sellCar(dealerID, model) {
        this.modelsSold[dealerID] = model;
        this.soldCars++;
    }
    showDetails() {
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
//# sourceMappingURL=3.CarDealership.js.map