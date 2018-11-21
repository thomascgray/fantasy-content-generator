const Utils = require('./utils');
const StringTemplate = require("string-template")
const Data = require('./data.json');

const generate = (props) => {
    const raceTemplates = require(`./races/${props.race}.json`)

    if (!raceTemplates) {
        throw new Error(`could not find race templates for ${props.race}`)
    }

    // TODO improve all this shit
    const template = Utils.pick(raceTemplates);
    const starts = require(`./races/${props.race}/start.json`)
    const middles = require(`./races/${props.race}/middle.json`)
    const ends = require(`./races/${props.race}/end.json`)

    const name = StringTemplate(template, {
        start1: Utils.pick(starts),
        start2: Utils.pick(starts),
        end1: Utils.pick(ends),
        end2: Utils.pick(ends),
        middle: Utils.pick(middles),
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