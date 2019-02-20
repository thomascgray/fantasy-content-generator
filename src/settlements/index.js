const Utils = require('../utils');
const SettlementData = require('../data/settlements.json')
const NaturalLandmarks = require('../data/natural_landmarks.json')

const settlementType = () => {
    return Utils.pick(Object.keys(SettlementData))
}

const population = type => {
    const populationRange = SettlementData[type].population_range.split('-');
    const population = Utils.rand(parseInt(populationRange[0]), parseInt(populationRange[1]))

    return population.toLocaleString();
}

const naturalLandmarks = type => {
    const naturalLandmarkCountRange = SettlementData[type].natural_landmark_count.split('-');
    const naturalLandmarks = []

    Utils.forCount(Utils.rand(naturalLandmarkCountRange[0], naturalLandmarkCountRange[1]), () => {
        naturalLandmarks.push(Utils.parseTemplate(Utils.pick(NaturalLandmarks)));
    });

    return naturalLandmarks;
}

const generate = props => {
    const type = settlementType();
    return {
        type,
        population: population(type),
        natural_landmarks: naturalLandmarks(type),
    }
}

const functions = {
    generate
}

module.exports = functions