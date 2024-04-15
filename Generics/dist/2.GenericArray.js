class GenericArray {
    _dataArray;
    constructor(data) {
        this._dataArray = data;
    }
    compare(value) {
        let result = 0;
        for (const element of this._dataArray) {
            if (element === value) {
                result++;
            }
        }
        return result;
    }
}
let c = new GenericArray([1, 2, 3, 4, 5, 1, 1]);
console.log(c.compare(1));
