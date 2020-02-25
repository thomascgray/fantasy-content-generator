import * as Utils from "../utils";
import LootData from "./loots.json";
import { ILootGenerateProps, ILootDomainObject } from "../interfaces";

export const generate = (props: ILootGenerateProps = {}): ILootDomainObject => {
  let { source, seed } = props;

  seed = seed || Utils.FantasyContentGeneratorSeed || Utils.generateUUID(); // eslint-disable-line

  return Utils.withSeed(seed, () => {
    source = source || Utils.pick(LootData.loot_source);

    const lootItem = Utils.pick(LootData.loot_per_loot_source[source]);

    return {
      seed,
      source,
      lootItem
    };
  });
};

const functions = {
  generate
};

export default functions;
