const Races = require('../races')
const Utils = require('../utils')
const Data = require('../data.json')

Data.races.forEach(race => {
    console.log(`****${race.toUpperCase()}S****`);
    console.log(Races[race]());
    console.log(Races[race]());
    console.log(Races[race]());
    console.log(Races[race]());
    console.log(Races[race]());
    console.log('');
});