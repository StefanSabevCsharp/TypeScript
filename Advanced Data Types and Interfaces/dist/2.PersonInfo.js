function createPerson(firstName, lastName, age) {
    let obj = {
        firstName,
        lastName,
        age: Number(age)
    };
    return obj;
}
console.log(createPerson("Peter", "Pan", "20"));
