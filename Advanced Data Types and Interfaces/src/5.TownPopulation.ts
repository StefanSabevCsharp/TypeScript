
function townPopulation(townArray : string[]):void {

    const townMap = new Map<string, number>();
    for (const town of townArray) {
        let[name,population] = town.split(" <-> ");
        let currentPopulation = townMap.get(name) || 0;
        townMap.set(name, currentPopulation + Number(population));
    }

    townMap.forEach((population, name) => {
        console.log(`${name} : ${population}`);
    });
    
}


townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']

);