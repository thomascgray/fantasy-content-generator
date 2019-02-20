const Names = require('../src/names')
const Data = require('../src/data/names.json')

Object.keys(Data).forEach(race => {
    console.log(`****${race.toUpperCase()}S****`);
    console.log(Names.generate({ race, gender: 'male'}));
    console.log(Names.generate({ race, gender: 'female'}));
    console.log('');
});