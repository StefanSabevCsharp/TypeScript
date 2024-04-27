type City = {
    taxRate: number;
    name: string;
    population: number;
    treasury: number;
    collectTaxes: () => number;
    applyGrowth: (percentage: number) => void;
    applyRecession: (percentage: number) => void;
};

function cityTaxes(name: string, population: number, treasury: number): City {
    const newCity: City = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes: function (): number {
            this.treasury += this.population * this.taxRate;
            return this.treasury;
        },
        applyGrowth: function (percentage: number) {
            this.population += Math.floor((this.population * percentage) / 100);
        },
        applyRecession: function (percentage: number) {
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

const city = cityTaxes("Tortuga", 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
