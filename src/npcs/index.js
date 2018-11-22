const Races = require('../races');
const Utils = require('../utils');
const Data = require('../data.json')

const generate = (props = {}) => {
    const characterTraitsJson = require('./characterTraits.json');
    const flawsJson = require('./flaws.json');

    const race = props.race ? props.race : Utils.pick(Data.races)
    const name = Races[race]();

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
        race,
        traits,
        flaws
    }
}

const functions = {
    generate
}

module.exports = functions