import * as Utils from "../utils";
import { IStoryhookGenerateProps, IStoryhookDomainObject } from "../interfaces";
import NPCActs from "./npc_acts.json";
import PCRelated from "./pc_related.json";

const generate = (
  props: IStoryhookGenerateProps = {},
  storyhookBank: any
): IStoryhookDomainObject => {
  let { seed } = props;

  seed = seed || globalThis.FantasyContentGeneratorSeed || Utils.generateUUID(); // eslint-disable-line

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

const functions = {
  generate,
  npcActs,
  pcRelated
};

export default functions;
