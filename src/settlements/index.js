const Utils = require('../utils');
const SettlementData = require('../data/settlements.json')

const settlementType = () => Utils.pick(Object.keys(SettlementData));

const population = type => {
    const populationRange = SettlementData[type].population_range.split('-');
    const population = Utils.rand(parseInt(populationRange[0]), parseInt(populationRange[1]))

    return population.toLocaleString();
}

const generate = (props = {}) => {
    const type = (props.type) ? props.type : settlementType();
    return {
        type,
        population: population(type),
    }
}

const functions = {
    generate
}

module.exports = functions