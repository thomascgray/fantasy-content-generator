import * as Utils from "../utils";
import Data from "./names.json";
import {
  INameGenerateProps,
  IRace,
  IGender,
  INameDomainObject,
} from "../interfaces";

/**
 * generate a name for a race and gender.
 *
 * @param {string} props.race generate with a specific race
 * @param {string} props.gender generate with a specific gender
 */
const generateName = (race: IRace, gender: IGender): string => {
  const raceTemplates = Data[race].templates;

  if (!raceTemplates) {
    throw new Error(`could not find race templates for ${race}`);
  }

  const template = Utils.pick(raceTemplates);

  switch (race) {
    case "dragonborn":
    case "dwarf":
    case "elf":
    case "gnome":
    case "halfling":
    case "human":
      return Utils.parseTemplate(template, {
        first: Utils.pick(Data[race][gender]),
        last: Utils.pick(Data[race].last),
      });
    case "halfOrc":
      return Utils.parseTemplate(template, {
        humanFirst: Utils.pick(Data.human[gender]),
        humanLast: Utils.pick(Data.human.last),
        orcFirst: Utils.pick(Data.halfOrc[gender]),
      });
    case "halfElf":
      return Utils.parseTemplate(template, {
        humanFirst: Utils.pick(Data.human[gender]),
        humanLast: Utils.pick(Data.human.last),
        elfFirst: Utils.pick(Data.elf[gender]),
        elfLast: Utils.pick(Data.elf.last),
      });
    case "tiefling":
      return Utils.parseTemplate(template, {
        humanFirst: Utils.pick(Data.human[gender]),
        humanLast: Utils.pick(Data.human.last),
        tieflingFirst: Utils.pick(Data.tiefling[gender]),
      });
    case "aelfir":
      const [adjective, adjective2] = Utils.pickMany(Data.aelfir.adjective, 2);
      const [thing, thing2] = Utils.pickMany(Data.aelfir.thing, 2);
      const [passive_emotion, passive_emotion2] = Utils.pickMany(
        Data.aelfir.passive_emotion,
        2
      );

      return Utils.parseTemplate(template, {
        verb_ing: Utils.parseTemplate(Utils.pick(Data.aelfir.verb_ing)),
        verb_present: Utils.parseTemplate(Utils.pick(Data.aelfir.verb_present)),
        adverb: Utils.parseTemplate(Utils.pick(Data.aelfir.adverb)),
        adjective: Utils.parseTemplate(adjective),
        adjective2: Utils.parseTemplate(adjective2),
        preposition: Utils.parseTemplate(Utils.pick(Data.aelfir.preposition)),
        preposition_spatial: Utils.parseTemplate(
          Utils.pick(Data.aelfir.preposition_spatial)
        ),
        passive_emotion: Utils.parseTemplate(passive_emotion),
        passive_emotion2: Utils.parseTemplate(passive_emotion2),
        thing: Utils.parseTemplate(thing),
        thing2: Utils.parseTemplate(thing2),
      });
  }
};

export const generate = (props: INameGenerateProps = {}): INameDomainObject => {
  let { race, gender, seed } = props;

  // use the given seed, or one set by withSeed, or generate one
  seed = seed || Utils.FantasyContentGeneratorSeed || Utils.generateUUID();

  // use withSeed to ensure seeded output for all `picks`
  return Utils.withSeed(seed, () => {
    race = race ? race : Utils.pick(Object.keys(Data));

    gender = gender ? gender : Utils.randomGender();

    const name = generateName(race, gender);

    const [firstName, lastName] = name.split(" ");

    return {
      seed,
      name,
      race,
      gender,
      firstName,
      lastName,
      formattedData: {
        name,
        race: Utils.formatRace(race),
        gender: Utils.titleCase(gender),
        firstName: firstName ? Utils.titleCase(firstName) : undefined,
        lastName: lastName ? Utils.titleCase(lastName) : undefined,
      },
    };
  });
};

const functions = {
  generate,
};

// setup a function for each race
Object.keys(Data).forEach((race: IRace) => {
  functions[race] = (props) => {
    props.race = race;
    return generate(props);
  };
});

export default functions;
