function sumOfNumbersBetween(number1 :string,number2 : string):void {
    const first :number = Number(number1);
    const second :number = Number(number2);
    let result :number = 0;
    for (let index = first; index <= second; index++) {
        result += index;
    }
    console.log(result);
    
}

sumOfNumbersBetween("1","5");