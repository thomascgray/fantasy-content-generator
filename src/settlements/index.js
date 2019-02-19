const Utils = require('../utils');
const Data = require('../data.json')
const NaturalLandmarks = require('../natural_landmarks.json')

const settlementType = () => {
    return Utils.pick(Data.settlement_types)
}

const population = type => {
    const populationRange = Data.settlement_type_populations[type].split('-');
    const population = Utils.rand(parseInt(populationRange[0]), parseInt(populationRange[1]))

    return population.toLocaleString();
}

const naturalLandmarks = type => {
    const naturalLandmarkCountRange = Data.settlement_type_natural_landmark_count[type].split('-');
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