const Utils = require('../utils');
const Data = require('../data/names.json')

/**
 * generate a name for a race and gender.
 * 
 * @param {string} props.race generate with a specific race
 * @param {string} props.gender generate with a specific gender
 */
const _generate = (props) => {
    if (!props) {
        props = {}
    }

    const shouldResetSeed = (props.shouldResetSeed != null) ? props.shouldResetSeed : true;

    if (shouldResetSeed) {
        Utils.resetSeed();
    }

    const seed = props.seed ? props.seed : Utils.generateUUID();
    
    const race = props.race ? props.race : Utils.pick(Object.keys(Data), undefined, undefined, seed)
    const gender = props.gender ? props.gender : Utils.pick(['male', 'female'], undefined, undefined, seed)

    const raceTemplates = Data[race].templates

    if (!raceTemplates) {
        throw new Error(`could not find race templates for ${race}`)
    }

    const template = Utils.pick(raceTemplates, undefined, undefined, seed);

    switch (race) {
        case 'dragonborn':
        case 'dwarf':
        case 'elf':
        case 'gnome':
        case 'halfling':
        case 'human':
            return Utils.parseTemplate(template, {
                first: Utils.pick(Data[race][gender], 1, false, seed),
                last: Utils.pick(Data[race].last, 1, false, seed),
            });
        case 'halfOrc':
            return Utils.parseTemplate(template, {
                humanFirst: Utils.pick(Data.human[gender], 1, false, seed),
                humanLast: Utils.pick(Data.human.last, 1, false, seed),
                orcFirst: Utils.pick(Data.halfOrc[gender], 1, false, seed),
            });
        case 'halfElf':
            return Utils.parseTemplate(template, {
                humanFirst: Utils.pick(Data.human[gender], 1, false, seed),
                humanLast: Utils.pick(Data.human.last, 1, false, seed),
                elfFirst: Utils.pick(Data.elf[gender], 1, false, seed),
                elfLast: Utils.pick(Data.elf.last, 1, false, seed),
            });
        case 'tiefling':
            return Utils.parseTemplate(template, {
                humanFirst: Utils.pick(Data.human[gender], 1, false, seed),
                humanLast: Utils.pick(Data.human.last, 1, false, seed),
                tieflingFirst: Utils.pick(Data.tiefling[gender], 1, false, seed),
            });
    }
}

const sanitise = name => {
    return name;
}

const generate = props => {
    const name = _generate(props);
    return sanitise(name);
}

const functions = {
    generate
}

// setup a function for each race
Object.keys(Data).forEach(race => {
    functions[race] = props => {
        if (props == null) {
            props = {}
        }
        props.race = race;
        return generate(props);
    }
});

module.exports = functions