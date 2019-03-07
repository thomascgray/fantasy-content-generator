const Names = require('../names');
const Utils = require('../utils');
const NameData = require('../data/names.json')
const NPCData = require('../data/npcs.json')

const generate = (props = {}) => {
    const race = props.race ? props.race : Utils.pick(Object.keys(NameData))
    const gender = props.gender ? props.gender : Utils.pick(['male', 'female'])
    const name = Names.generate({ race, gender });

    const traits = Utils.pick(NPCData.traits, 2, true).map(Utils.parseTemplate);
    const desires = Utils.pick(NPCData.desires, 1, true).map(Utils.parseTemplate);

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
        formattedData
    }
}

const functions = {
    generate
}

module.exports = functions