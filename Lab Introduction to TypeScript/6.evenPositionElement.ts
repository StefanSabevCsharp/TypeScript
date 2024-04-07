function findEvenPosition (array :number[]) : number[]{

    let result :number[] = [];
    for (let index = 0; index < array.length; index++) {
        if(index % 2 == 0){
            result.push(array[index]);
        }
        
    }

    return result;
}


console.log(findEvenPosition([1,2,3,4,5,6,7,8,9,10])); // [1,3,5,7,9]