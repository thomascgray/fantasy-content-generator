const Utils = require('../utils');
const SettlementData = require('../data/settlements.json')
const PointsOfInterest = require('../data/points_of_interest.json')

const settlementType = () => {
    return Utils.pick(Object.keys(SettlementData))
}

const population = type => {
    const populationRange = SettlementData[type].population_range.split('-');
    const population = Utils.rand(parseInt(populationRange[0]), parseInt(populationRange[1]))

    return population.toLocaleString();
}

const naturalLandmarks = type => {
    const pointOfInterestCountRange = SettlementData[type].natural_landmark_count.split('-');
    const pointOfInterests = []

    Utils.forCount(Utils.rand(pointOfInterestCountRange[0], pointOfInterestCountRange[1]), () => {
        pointOfInterests.push(Utils.parseTemplate(Utils.pick(PointsOfInterest)));
    });

    return pointOfInterests;
}

const generate = (props = {}) => {
    const type = (props.type) ? props.type : settlementType();
    return {
        type,
        population: population(type),
        points_of_interest: naturalLandmarks(type),
    }
}

const functions = {
    generate
}

module.exports = functions