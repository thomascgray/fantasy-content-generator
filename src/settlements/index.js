const Utils = require("../utils");
const SettlementData = require("../data/settlements.json");

const settlementType = () => Utils.pick(Object.keys(SettlementData));

const population = settlementType => {
  const populationRange = SettlementData[settlementType].population_range.split(
    "-"
  );
  const population = Utils.rand(
    parseInt(populationRange[0]),
    parseInt(populationRange[1])
  );

  return population.toLocaleString();
};

const generate = (props = {}) => {
  let { type, seed } = props;

  seed = seed || globalThis.FantasyContentGeneratorSeed || Utils.generateUUID(); // eslint-disable-line

  return Utils.withSeed(seed, () => {
    type = type ? type : settlementType();

    return {
      seed,
      type,
      population: population(type)
    };
  });
};

const functions = {
  generate
};

module.exports = functions;
