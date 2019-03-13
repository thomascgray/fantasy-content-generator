const Names = require('../names');
const Utils = require('../utils');
const NameData = require('../data/names.json')
const NPCData = require('../data/npcs.json')

const generate = (props = {}) => {
    Utils.resetSeed();

    const seed = props.seed ? props.seed : Utils.generateUUID();
    const traits = Utils.pick(NPCData.traits, 2, true, seed).map(val => Utils.parseTemplate(val, null, seed));
    const desires = Utils.pick(NPCData.desires, 1, true, seed).map(val => Utils.parseTemplate(val, null, seed));
    const race = props.race ? props.race : Utils.pick(Object.keys(NameData), 1, false, seed)
    const gender = props.gender ? props.gender : Utils.pick(['male', 'female'], 1, false, seed)
    const name = Names.generate({ race, gender, seed, shouldResetSeed: false });

    const formattedData = {
        name,
        gender: Utils.titleCase(gender),
        race: Utils.formatRace(race),
        traits,
        desires
    }

    return {
        name,
        gender,
        race,
        traits,
        desires,
        seed,
        formattedData
    }
}

const functions = {
    generate
}

module.exports = functions