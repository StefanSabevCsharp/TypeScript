function cityTaxes(name, population, treasury) {
    const newCity = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes: function () {
            this.treasury += this.population * this.taxRate;
            return this.treasury;
        },
        applyGrowth: function (percentage) {
            this.population += Math.floor((this.population * percentage) / 100);
        },
        applyRecession: function (percentage) {
            this.treasury -= Math.ceil((this.treasury * percentage) / 100);
        },
    };
    return newCity;
}
// const city = 
//   cityTaxes('Tortuga',
//   7000,
//   15000);
// console.log(city);
const city = cityTaxes('Tortuga', 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
