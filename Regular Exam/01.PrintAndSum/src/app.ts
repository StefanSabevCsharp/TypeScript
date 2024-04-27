function printNumbersAndSum(start: number, end: number): void {
    let sum: number = 0;
    let result: string = "";
    for (let i = start; i <= end; i++) {
        sum += i;
        result += i + " ";
    }
    console.log(result.trim());
    console.log(`Sum: ${sum}`);
}

printNumbersAndSum(50, 60);
