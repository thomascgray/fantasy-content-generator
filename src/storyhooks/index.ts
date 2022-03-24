import * as Utils from "../utils";
import {
  IStoryhookGenerateProps,
  IStoryhookDomainObject,
  eStoryhookBanks,
} from "../interfaces";
import NPCActs from "./npc_acts.json";
import PCRelated from "./pc_related.json";
import LocationBasedUrban from "./location_based_urban.json";
import LocationBasedWilderness from "./location_based_wilderness.json";

const generate = (
  props: IStoryhookGenerateProps = {}
): IStoryhookDomainObject => {
  let { seed, storyhookBank } = props;

  seed = seed || Utils.FantasyContentGeneratorSeed || Utils.generateUUID();
  storyhookBank = storyhookBank || Utils.pick(Object.values(eStoryhookBanks));
  let actualStorybank;

  switch (storyhookBank) {
    case eStoryhookBanks.NPC_ACTS:
      actualStorybank = NPCActs;
      break;
    case eStoryhookBanks.PC_RELATED:
      actualStorybank = PCRelated;
      break;
    case eStoryhookBanks.LOCATION_BASED_URBAN:
      actualStorybank = LocationBasedUrban;
      break;
    case eStoryhookBanks.LOCATION_BASED_WILDERNESS:
      actualStorybank = LocationBasedWilderness;
      break;
  }

  return Utils.withSeed(seed, () => {
    return {
      seed,
      storyhook: Utils.parseTemplate(Utils.pick(actualStorybank)),
      storyhookBank,
    };
  });
};

const npcActs = (props: IStoryhookGenerateProps = {}) =>
  generate({
    ...props,
    storyhookBank: eStoryhookBanks.NPC_ACTS,
  });

const pcRelated = (props: IStoryhookGenerateProps = {}) =>
  generate({
    ...props,
    storyhookBank: eStoryhookBanks.PC_RELATED,
  });

const locationBasedUrban = (props: IStoryhookGenerateProps = {}) =>
  generate({
    ...props,
    storyhookBank: eStoryhookBanks.LOCATION_BASED_URBAN,
  });

const locationBasedWilderness = (props: IStoryhookGenerateProps = {}) =>
  generate({
    ...props,
    storyhookBank: eStoryhookBanks.LOCATION_BASED_WILDERNESS,
  });

const functions = {
  generate,
  npcActs,
  pcRelated,
  locationBasedUrban,
  locationBasedWilderness,
};

export default functions;
