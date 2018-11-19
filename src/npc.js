const Races = require('./races');
const Utils = require('./utils');

const generate = (props = {}) => {
    const characterTraits = require('./characterTraits.json')
    const race = props.race ? props.race : Utils.pick(['orc', 'gnome', 'dwarf', 'elf', 'human'])
    const name = Races[race]();

    const traits = [Utils.pick(characterTraits), Utils.pick(characterTraits)]

    return {
        name,
        race,
        traits
    }
}

const functions = {
    generate
}

module.exports = functions