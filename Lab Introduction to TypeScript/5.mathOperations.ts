
function calculator(num1 :number,num2 :number,oparand :string) :void{
    switch (oparand) {
        case "+":
            console.log(num1 + num2);
            break;
        case "-":
            console.log(num1 - num2);
            break;
        case "*":
            console.log(num1 * num2);
            break;
        case "/":
            console.log(num1 / num2);
            break;
        case "%":
            console.log(num1 % num2);
            break;
        case "**":
            console.log(num1 ** num2);
            break;
        default:
            console.log("error");
            break;
    }
}

calculator(5,6,"+")