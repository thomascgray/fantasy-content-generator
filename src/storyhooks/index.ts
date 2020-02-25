import * as Utils from "../utils";
import { IStoryhookGenerateProps, IStoryhookDomainObject } from "../interfaces";
import NPCActs from "./npc_acts.json";
import PCRelated from "./pc_related.json";
import LocationBasedUrban from "./location_based_urban.json";
import LocationBasedWilderness from "./location_based_wilderness.json";

const generate = (
  props: IStoryhookGenerateProps = {},
  storyhookBank: any
): IStoryhookDomainObject => {
  let { seed } = props;

  seed = seed || Utils.FantasyContentGeneratorSeed || Utils.generateUUID();

  return Utils.withSeed(seed, () => {
    return {
      seed,
      storyhook: Utils.parseTemplate(Utils.pick(storyhookBank))
    };
  });
};

const npcActs = (props: IStoryhookGenerateProps = {}) =>
  generate(props, NPCActs);

const pcRelated = (props: IStoryhookGenerateProps = {}) =>
  generate(props, PCRelated);

const locationBasedUrban = (props: IStoryhookGenerateProps = {}) =>
  generate(props, LocationBasedUrban);

const locationBasedWilderness = (props: IStoryhookGenerateProps = {}) =>
  generate(props, LocationBasedWilderness);

const functions = {
  generate,
  npcActs,
  pcRelated,
  locationBasedUrban,
  locationBasedWilderness
};

export default functions;
