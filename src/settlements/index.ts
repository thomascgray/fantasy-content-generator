import * as Utils from "../utils";
import {
  ISettlementGenerateProps,
  ISettlementDomainObject
} from "../interfaces";
import SettlementData from "./settlements.json";
import Establishments from "../establishments";

const settlementType = () => Utils.pick(Object.keys(SettlementData.types));

const _population = settlementType => {
  const population = Utils.rand(
    SettlementData.types[settlementType].minPop,
    SettlementData.types[settlementType].maxPop
  );

  return population.toLocaleString();
};

export const generate = (
  props: ISettlementGenerateProps = {}
): ISettlementDomainObject => {
  let { type, seed } = props;

  seed = seed || Utils.FantasyContentGeneratorSeed || Utils.generateUUID();

  return Utils.withSeed(seed, () => {
    type = type ? type : settlementType();

    return {
      seed,
      type,
      population: _population(type),
      establishments: Establishments.generate()
    };
  });
};

const functions = {
  generate
};

export default functions;
