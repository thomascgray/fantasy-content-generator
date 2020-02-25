import * as Utils from "../utils";
// import {
//   IPointOfInterestGenerateProps,
//   IPointOfInterestDomainObject
// } from "../interfaces";

const pointOfInterestType = () => {};

import PointOfInterestData from "./points_of_interest.json";

export const generate = (props: any = {}): any => {
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
