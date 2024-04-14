function createPerson(firstName: string, lastName: string, age: string): object {

    let obj: object ={
        firstName,
        lastName,
        age : Number(age)
    } 

    return obj;
}

console.log(createPerson("Peter", 
"Pan",
"20"
));