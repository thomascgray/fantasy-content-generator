const Names = require("../names");
const Utils = require("../utils");
let NameData = require("../names/names.json");
let NPCData = require("./npcs.json");

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

    // if we should generate relations, generate them
    let relations = [];
    if (shouldGenerateRelations) {
      relations = generateRelationships({
        originalNpcNameObject: nameObject,
        race,
        gender,
        desires
      });
    }

    // build the whole together and return it
    return {
      seed,
      nameObject,
      gender,
      race,
      traits,
      desires,
      formattedData: {
        name: nameObject.name,
        firstName: nameObject.firstName,
        lastName: nameObject.lastName,
        gender: Utils.titleCase(gender),
        race: Utils.formatRace(race),
        traits,
        desires,
        relations
      },
      relations
    };
  });
};

const generateRelationships = ({ originalNpcNameObject, race, desires }) => {
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
          npc: generateFamilyMember({
            originalNpcNameObject,
            race,
            relationTitle
          })
        };
    }
  });
};

/**
 * given a list of desires, return any relationship keywords that are mentioned in the desires
 * @param {string} desires
 */
const getRelationTitlesFromDesires = desires => {
  const concatonatedDesires = desires.join(":");

  return RelationshipKeyWords.filter(relationKeyword =>
    concatonatedDesires.includes(relationKeyword)
  );
};

const generateFamilyMember = ({
  originalNpcNameObject,
  race,
  relationTitle
}) => {
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
  const generatedRelation = generate({ race, gender });

  // if both the original NPC and the generated NPC have a surname, set the generated NPC's
  // surname to the original NPCs surname
  if (
    originalNpcNameObject.formattedData.lastName != null &&
    generatedRelation.formattedData.lastName != null
  ) {
    // both have a surname - normalize it
    generatedRelation.nameObject.name = generatedRelation.nameObject.name.replace(
      generatedRelation.formattedData.lastName,
      originalNpcNameObject.formattedData.lastName
    );
    generatedRelation.nameObject.lastName = originalNpcNameObject.lastName;
    generatedRelation.formattedData.name = generatedRelation.formattedData.name.replace(
      generatedRelation.formattedData.lastName,
      originalNpcNameObject.formattedData.lastName
    );
    generatedRelation.formattedData.lastName = originalNpcNameObject.lastName;
  }

  return generatedRelation;
};

const functions = {
  generate,
  trait: () => Utils.parseTemplate(Utils.pick(NPCData.traits)),
  desire: () => Utils.parseTemplate(Utils.pick(NPCData.desires))
};

module.exports = functions;
