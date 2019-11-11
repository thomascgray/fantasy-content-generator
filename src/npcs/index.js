const Names = require("../names");
const Utils = require("../utils");
let NameData = require("../data/names.json");
let NPCData = require("../data/npcs.json");

const RelationshipKeyWords = [
  "mother",
  "father",
  "son",
  "daughter",
  "brother",
  "sister"
];

/**
 *
 * @param {object} props
 * @param {string} props.seed
 * @param {string} props.race
 * @param {string} props.gender
 * @param {string} props.name
 * @param {bool} props.shouldGenerateRelations
 */
const generate = (props = {}) => {
  let { seed, race, gender, shouldGenerateRelations = true } = props;

  // use the given seed, or one set by withSeed, or generate one
  seed = seed || globalThis.FantasyContentGeneratorSeed || Utils.generateUUID(); // eslint-disable-line

  return Utils.withSeed(seed, () => {
    race = race ? race : Utils.pick(Object.keys(NameData));
    gender = gender ? gender : Utils.pick(["male", "female"]);

    // generate a name
    const nameObject = Names.generate({ seed, race, gender });

    // get 2 traits and 1 desire
    const traits = Utils.pickMany(NPCData.traits, 2).map(Utils.parseTemplate);
    const desires = Utils.pickMany(NPCData.desires, 1).map(Utils.parseTemplate);

    let relations = [];

    if (shouldGenerateRelations) {
      relations = generateRelationships({
        name: nameObject.name,
        race,
        gender,
        desires
      });
    }

    const npc = {
      seed,
      nameObject,
      gender,
      race,
      traits,
      desires,
      formattedData: {
        name: nameObject.name,
        gender: Utils.titleCase(gender),
        race: Utils.formatRace(race),
        traits,
        desires,
        relations
      },
      relations
    };

    return npc;
  });
};

const getRelationTitlesFromDesires = desires => {
  const concatonatedDesires = desires.join(":");

  return RelationshipKeyWords.filter(relationKeyword =>
    concatonatedDesires.includes(relationKeyword)
  );
};

const generateRelationships = ({ name, race, desires }) => {
  const relationTitles = getRelationTitlesFromDesires(desires);
  return relationTitles.map(relationTitle => {
    switch (relationTitle) {
      case "father":
      case "mother":
      case "brother":
      case "sister":
      case "son":
      case "daughter":
        return {
          relationTitle,
          npc: generateFamilyMember({ name, race, relationTitle })
        };
    }
  });
};

const getSurname = name => {
  if (name == null) {
    return null;
  }
  const names = name.trim().split(" ");
  if (names.length <= 1) {
    return null;
  }
  return names[names.length - 1].trim();
};

const generateFamilyMember = ({ name, race, relationTitle }) => {
  let gender = null;
  switch (relationTitle) {
    case "father":
    case "brother":
    case "son":
      gender = "male";
      break;
    case "mother":
    case "sister":
    case "daughter":
      gender = "female";
      break;
  }
  const npc = generate({ race, gender });
  const passedSurname = getSurname(name);
  const npcSurname = getSurname(npc.formattedData.name);

  if (passedSurname != null && npcSurname != null) {
    // both have a surname - normalize it
    npc.nameObject.name = npc.nameObject.name.replace(
      npcSurname,
      passedSurname
    );
    npc.formattedData.name = npc.formattedData.name.replace(
      npcSurname,
      passedSurname
    );
  }

  return npc;
};

const functions = {
  generate,
  trait: () => Utils.parseTemplate(Utils.pick(NPCData.traits)),
  desire: () => Utils.parseTemplate(Utils.pick(NPCData.desires))
};

module.exports = functions;
