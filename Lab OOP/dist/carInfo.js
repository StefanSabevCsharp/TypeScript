class Car {
    _brand;
    _model;
    _horsePower;
    constructor(brand, model, horsePower) {
        this._brand = brand;
        this._model = model;
        this._horsePower = Number(horsePower);
    }
    get brand() {
        return this._brand;
    }
    set brand(value) {
        this._brand = value;
    }
    get model() {
        return this._model;
    }
    set model(value) {
        this._model = value;
    }
    get horsePower() {
        return this._horsePower;
    }
    set horsePower(value) {
        this._horsePower = value;
    }
}
function createCar(brand, model, horsePower) {
    return new Car(brand, model, horsePower);
}
let car = createCar("BMW", "X5", 400);
console.log(`The car is : ${car.brand} ${car.model} - ${car.horsePower}HP`);
//# sourceMappingURL=carInfo.js.map