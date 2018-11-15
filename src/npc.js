import Races from './races'
const Utils = require('./utils');

const generate = props => {
    const characterTraits = require('./character_traits.json')
    const race = Utils.pick(['orc', 'gnome', 'dwarf', 'elf', 'human'])
    const name = Races[race]();

    const traits = Utils.pick(characterTraits)

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