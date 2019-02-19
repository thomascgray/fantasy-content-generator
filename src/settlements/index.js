const Utils = require('../utils');
const Data = require('../data.json')

const settlementType = () => {
    return Utils.pick(Data.settlement_types)
}

const population = type => {
    const populationRange = Data.settlement_type_populations[type].split('-');
    const population = Utils.rand(parseInt(populationRange[0]), parseInt(populationRange[1]))

    return population.toLocaleString();
}

const generate = props => {
    const type = settlementType();
    return {
        type,
        population: population(type),
    }
}

const functions = {
    generate
}

module.exports = functions