function storeHeroes(array: string[]) : void{

    type Hero = {
        heroName,
        level,
        heroItems
    }

    let allHeroes: Hero[] = [];
    for (const hero of array) {
        let heroName: string = hero.split("/")[0];
        let level: number = Number(hero.split("/")[1]);
        let heroItems: string = hero.split("/")[2];
        allHeroes.push({
            heroName,
            level,
            heroItems
        });
    }
    //The output is all of the data for all the heroes you’ve stored sorted ascending by level
    allHeroes.sort((a,b) => a.level - b.level).forEach(h => {
        console.log(`Hero: ${h.heroName}\nlevel => ${h.level}\nitems => ${h.heroItems}`);
    })

}

storeHeroes([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    );