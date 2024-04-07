function aggregateElements(arr: number[]) {
    console.log(arr.reduce((acc, curr) => acc + curr, 0));
    console.log(arr.reduce((acc, curr) => acc + 1 / curr, 0));
    console.log(arr.join(''));
}

aggregateElements([1, 2, 3]); // 6 1.8333 123