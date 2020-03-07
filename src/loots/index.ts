import * as Utils from "../utils";
import LootData from "./loots.json";
import { ILootGenerateProps, ILootDomainObject } from "../interfaces";

export const generate = (props: ILootGenerateProps = {}): ILootDomainObject => {
  let { source, seed, quantity } = props;

  seed = seed || Utils.FantasyContentGeneratorSeed || Utils.generateUUID();
  quantity = quantity || 1;

  return Utils.withSeed(seed, () => {
    source = source || Utils.pick(LootData.loot_source);

    const lootItems = Utils.pickMany(
      LootData.loot_per_loot_source[source],
      quantity
    ).map(l => Utils.parseTemplate(l));

    return {
      seed,
      source,
      lootItems,
      quantity,
      formattedData: {
        lootItems,
        quantity,
        label: `${source} #${seed.substring(0, 8)}`
      }
    };
  });
};

const functions = {
  generate
};

export default functions;
