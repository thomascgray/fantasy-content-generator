const Utils = require('../utils');
const Data = require('../data/names.json')

/**
 * generate a name for a race and gender.
 * 
 * if no race given, throws error. if no gender gives, picks one randomly
 * 
 * @param {object} props 
 * @param {string} props.race
 * @param {string} props.gender
 */
const _generate = (props) => {
    let { race, gender } = props;

    if (gender == null) {
        gender = Utils.pick(['male', 'female']);
    }

    const raceTemplates = Data[race].templates

    if (!raceTemplates) {
        throw new Error(`could not find race templates for ${race}`)
    }

    const template = Utils.pick(raceTemplates);

    switch (props.race) {
        case 'dragonborn':
        case 'dwarf':
        case 'elf':
        case 'gnome':
        case 'halfling':
        case 'human':
            return Utils.parseTemplate(template, {
                first: Utils.pick(Data[race][gender]),
                last: Utils.pick(Data[race].last),
            });
        case 'half-orc':
            return Utils.parseTemplate(template, {
                humanFirst: Utils.pick(Data.human[gender]),
                humanLast: Utils.pick(Data.human.last),
                orcFirst: Utils.pick(Data["half-orc"][gender]),
            });
        case 'half-elf':
            return Utils.parseTemplate(template, {
                humanFirst: Utils.pick(Data.human[gender]),
                humanLast: Utils.pick(Data.human.last),
                elfFirst: Utils.pick(Data.elf[gender]),
                elfLast: Utils.pick(Data.elf.last),
            });
        case 'tiefling':
            return Utils.parseTemplate(template, {
                humanFirst: Utils.pick(Data.human[gender]),
                humanLast: Utils.pick(Data.human.last),
                tieflingFirst: Utils.pick(Data.tiefling[gender]),
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