const Utils = require('../utils');
const StringTemplate = require("string-template")
const Data = require('../data.json');

const _generate = (props) => {
    const raceTemplates = require(`./${props.race}/templates.json`)

    if (!raceTemplates) {
        throw new Error(`could not find race templates for ${props.race}`)
    }

    const template = Utils.pick(raceTemplates);

    switch (props.race) {
        case 'dragonborn':
        case 'dwarf':
        case 'elf':
        case 'gnome':
        case 'halfling':
        case 'human':
        case 'orc':
            return StringTemplate(template, {
                first: Utils.pick(require(`./${props.race}/first.json`)),
                last: Utils.pick(require(`./${props.race}/last.json`)),
            });
        case 'half-orc':
            return StringTemplate(template, {
                humanFirst: Utils.pick(require(`./human/first.json`)),
                humanLast: Utils.pick(require(`./human/last.json`)),
                orcFirst: Utils.pick(require(`./orc/first.json`)),
            });
        case 'tiefling':
            return StringTemplate(template, {
                humanFirst: Utils.pick(require(`./human/first.json`)),
                humanLast: Utils.pick(require(`./human/last.json`)),
                tieflingFirst: Utils.pick(require(`./tiefling/first.json`)),
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

Data.races.forEach(race => {
    functions[race] = () => generate({ race })
})

module.exports = functions