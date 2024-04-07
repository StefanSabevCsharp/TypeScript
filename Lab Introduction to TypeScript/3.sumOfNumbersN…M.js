function sumOfNumbersBetween(number1, number2) {
    const first = Number(number1);
    const second = Number(number2);
    let result = 0;
    for (let index = first; index <= second; index++) {
        result += index;
    }
    console.log(result);
}
sumOfNumbersBetween("1", "5");
