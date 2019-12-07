import * as Utils from "../utils";
import { IStoryhookGenerateProps, IStoryhookDomainObject } from "../interfaces";

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
  generate(props, require("./npc_acts.json"));

const pcRelated = (props: IStoryhookGenerateProps = {}) =>
  generate(props, require("./pc_related.json"));

const functions = {
  generate,
  npcActs,
  pcRelated
};

export default functions;
