import * as Utils from "../utils";
import {
  IGuildGenerateProps,
  IGuildDomainObject,
  INPCDomainObject,
  IGuildPrimaryType,
} from "../interfaces";
import GuildData from "./guilds.json";
import NPCs from "../npcs";

/*
 *
 Fighters' guilds: Might Club, The Eternal Guardians, The Pugilists, Band of Brawlers, Knights of the First Order, The Crossed Swords League, Aggressors Anonymous.

Thieves' guilds: Silent Movers, Silent Partners, The Tip-Toe Club, Good Fences, League of Lifters and Grifters, The Neighborhood Watch, The Unseen Hand, The Kleptocrats, The Riverside Raiders, Black Market Mayhem, The Boondock Burglars, The Dock Workers, Pickpockets Anonymous.

Mages' guilds: We Make Magic!, The Academy, The Arcane Order, Adepts Anonymous, The Callers Club, The Union of Universal Magic, The University of the Unusual and Unexplained, The College of Conjurers, Necromancers' Network, The Evokers' League, The Nation of Abjuration, Seers' and Company, The Illusory Guild, Spellcasters Anonymous.

Assassins' guilds: Dead Is Dead, The Killers, The Slayers, The Big Game Players, The Blood Club, The League of Silence, The Silencers, The Whispers, The Shadow Guild, Shadowfront.

(No time to think of more now -- but thinking of generic names from the dark and sinister to the serious and heroic to the whimsical and not-so-witty.) 
 */

const generate = (props: IGuildGenerateProps = {}): IGuildDomainObject => {
  let { seed, type, name } = props;

  seed = seed || Utils.FantasyContentGeneratorSeed || Utils.generateUUID();

  return Utils.withSeed(
    seed,
    (): IGuildDomainObject => {
      type = type || _type();

      const npcs = _npcs(seed, type);

      name = name || _name(type, npcs);

      return {
        seed,
        type,
        npcs,
        name,
        formattedData: {
          name,
          npcs,
          type: Utils.titleCase(type),
        },
      };
    }
  );
};

const _npcs = (seed, type): INPCDomainObject[] => {
  return new Array(Utils.rand(3, 6)).fill(0).map((val, index) => {
    return NPCs.generate({
      seed: `${seed}-npc-${index}`,
    });
  });
};

const _type = (): IGuildPrimaryType => {
  return Utils.pick(GuildData.types);
};

const _name = (guildType, npcs): string => {
  return "guild name";
};

const functions = {
  generate,
};

export default functions;
