class Car {
    private _brand: string;
    private _model: string;
    private _horsePower: number;

    constructor(brand: string,model: string, horsePower: number ){
        this._brand = brand;
        this._model = model;
        this._horsePower = Number(horsePower);
    }

    get brand() :string{
        return this._brand;
    }
    set brand(value: string){
        this._brand = value;
    }
    get model(): string{
        return this._model;
    }
    set model(value: string){
        this._model = value;
    }
    get horsePower(): number{
        return this._horsePower;
    }
    set horsePower(value: number){
        this._horsePower = value;
    }
}

function createCar(brand: string, model: string, horsePower: number){
    return new Car(brand, model, horsePower);
}
let car = createCar("BMW", "X5", 400);
console.log(`The car is : ${car.brand} ${car.model} - ${car.horsePower}HP`);

