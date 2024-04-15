class Box {
    _data;
    constructor(data) {
        this._data = data;
    }
    toString() {
        console.log(`${this._data} is type of ${typeof (this._data)}`);
    }
}
let box1 = new Box(123);
let box2 = new Box("hello");
let box3 = new Box({});
box1.toString();
box2.toString();
box3.toString();
