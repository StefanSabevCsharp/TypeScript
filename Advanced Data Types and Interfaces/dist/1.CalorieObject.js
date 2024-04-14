function createObj(objectsArray) {
    let foods = {};
    for (let index = 0; index < objectsArray.length; index += 2) {
        let foodName = objectsArray[index];
        let quantity = Number(objectsArray[index + 1]);
        foods[foodName] = quantity;
    }
    return foods;
}
console.log(createObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
