const Utils = require("../utils");
let Data = require("./names.json");

/**
 * generate a name for a race and gender.
 *
 * @param {string} props.race generate with a specific race
 * @param {string} props.gender generate with a specific gender
 */
const generateName = (race, gender) => {
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
        last: Utils.pick(Data[race].last)
      });
    case "halfOrc":
      return Utils.parseTemplate(template, {
        humanFirst: Utils.pick(Data.human[gender]),
        humanLast: Utils.pick(Data.human.last),
        orcFirst: Utils.pick(Data.halfOrc[gender])
      });
    case "halfElf":
      return Utils.parseTemplate(template, {
        humanFirst: Utils.pick(Data.human[gender]),
        humanLast: Utils.pick(Data.human.last),
        elfFirst: Utils.pick(Data.elf[gender]),
        elfLast: Utils.pick(Data.elf.last)
      });
    case "tiefling":
      return Utils.parseTemplate(template, {
        humanFirst: Utils.pick(Data.human[gender]),
        humanLast: Utils.pick(Data.human.last),
        tieflingFirst: Utils.pick(Data.tiefling[gender])
      });
  }
};

const generate = (props = {}) => {
  let { race, gender, seed } = props;

  // use the given seed, or one set by withSeed, or generate one
  seed = seed || globalThis.FantasyContentGeneratorSeed || Utils.generateUUID(); //eslint-disable-line

  // use withSeed to ensure seeded output for all `picks`
  return Utils.withSeed(seed, () => {
    race = race ? race : Utils.pick(Object.keys(Data));

    gender = gender ? gender : Utils.pick(["male", "female"]);

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
        lastName: lastName ? Utils.titleCase(lastName) : undefined
      }
    };
  });
};

const functions = {
  generate
};

// setup a function for each race
Object.keys(Data).forEach(race => {
  functions[race] = props => {
    if (props == null) {
      props = {};
    }
    props.race = race;
    return generate(props);
  };
});

module.exports = functions;
