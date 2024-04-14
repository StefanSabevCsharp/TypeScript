type City = {
    name : string,
    latitude : string,
    longitude:string
}


function createCities(citiesArray: string[]):City []{

   
    let cities :City[] = [];

    for (const city of citiesArray) {
        let[name,latitude,longitude] = city.split("|");
        //want ot transform latitude and longitude to numbers and then toFixed(2) to both of them before putting them in the object
        // let latitude = Number(latitude).toFixed(2);
        // let longitude = Number(longitude).toFixed(2);

        let newCity : City = {
            name,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }
        cities.push(newCity)
        
    }


    return cities;
}

console.log(createCities(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
))