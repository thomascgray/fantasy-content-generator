import * as Utils from "../utils";
// import {
//   IPointOfInterestGenerateProps,
//   IPointOfInterestDomainObject
// } from "../interfaces";

const pointOfInterestType = () => {};

import PointOfInterestData from "./points_of_interest.json";

export const generate = (props: any = {}): any => {
  let { type, seed } = props;

  seed = seed || Utils.FantasyContentGeneratorSeed || Utils.generateUUID(); // eslint-disable-line

  return {};
  // return Utils.withSeed(seed, () => {
  //   type = type ? type : settlementType();

  //   return {
  //     seed,
  //     type,
  //     population: population(type)
  //   };
  // });
};
