const Races = require('../src/races')
const Utils = require('../src/utils')
const Data = require('../src/data.json')

Data.races.forEach(race => {
    console.log(`****${race.toUpperCase()}S****`);
    console.log(Races[race]());
    console.log(Races[race]());
    console.log(Races[race]());
    console.log(Races[race]());
    console.log(Races[race]());
    console.log('');
});