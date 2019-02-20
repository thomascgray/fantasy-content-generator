const Names = require('../names');
const Utils = require('../utils');
const NameData = require('../data/names.json')

const generate = (props = {}) => {
    const characterTraitsJson = require('./characterTraits.json');
    const flawsJson = require('./flaws.json');

    const race = props.race ? props.race : Utils.pick(Object.keys(NameData))
    const gender = props.gender ? props.gender : Utils.pick(['male', 'female'])
    const name = Names.generate({ race, gender });

    const traits = [];
    const flaws = [];

    Utils.forCount(Utils.rand(1, 3), () => {
        traits.push(Utils.parseTemplate(Utils.pick(characterTraitsJson)));
    });

    Utils.forCount(Utils.rand(1, 2), () => {
        flaws.push(Utils.parseTemplate(Utils.pick(flawsJson)));
    });

    return {
        name,
        gender,
        race,
        traits,
        flaws
    }
}

const functions = {
    generate
}

module.exports = functions