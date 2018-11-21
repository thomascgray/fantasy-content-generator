const Utils = require('../utils');
const StringTemplate = require("string-template")
const Data = require('../data.json');

const generate = (props) => {
    const raceTemplates = require(`./${props.race}/templates.json`)

    if (!raceTemplates) {
        throw new Error(`could not find race templates for ${props.race}`)
    }

    // TODO improve all this shit
    const template = Utils.pick(raceTemplates);
    const firsts = require(`./${props.race}/first.json`)
    const lasts = require(`./${props.race}/last.json`)

    const name = StringTemplate(template, {
        first: Utils.pick(firsts),
        last: Utils.pick(lasts),
    });

    return name;
}

const functions = {
    generate
}

Data.races.forEach(race => {
    functions[race] = () => functions.generate({ race })
})

module.exports = functions