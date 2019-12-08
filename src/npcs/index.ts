import * as Utils from "../utils";
import Names from "../names";
import NameData from "../names/names.json";
import NPCData from "./npcs.json";

import {
  INPCGenerateProps,
  INameDomainObject,
  IRace,
  INPCDomainObject,
  ISeed
} from "../interfaces";

const RelationshipKeyWords = [
  "mother",
  "father",
  "son",
  "daughter",
  "brother",
  "sister"
];

const generate = (props: INPCGenerateProps = {}): INPCDomainObject => {
  let { seed, race, gender, shouldGenerateRelations = true } = props;

  // use the given seed, or one set by withSeed, or generate one
  seed = seed || globalThis.FantasyContentGeneratorSeed || Utils.generateUUID(); // eslint-disable-line

  return Utils.withSeed(seed, () => {
    race = race ? race : Utils.pick(Object.keys(NameData));
    gender = gender ? gender : Utils.randomGender();

    // generate a name
    const nameObject = Names.generate({ race, gender });

    // get 2 traits and 1 desire
    const traits: string[] = Utils.pickMany(NPCData.traits, 2).map(
      Utils.parseTemplate
    );
    const desires: string[] = Utils.pickMany(NPCData.desires, 1).map(
      Utils.parseTemplate
    );

    // if we should generate relations, generate them
    let relations = [];
    if (shouldGenerateRelations) {
      relations = generateRelationships({
        originalNpcNameObject: nameObject,
        race,
        desires,
        seed
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

const generateRelationships = ({
  originalNpcNameObject,
  race,
  desires,
  seed
}: {
  originalNpcNameObject: INameDomainObject;
  race: IRace;
  desires: string[];
  seed: ISeed;
}) => {
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
            relationTitle,
            seed: `${relationTitle}-${seed}`
          })
        };
    }
  });
};

/**
 * given a list of desires, return any relationship keywords that are mentioned in the desires
 * @param {string} desires
 */
const getRelationTitlesFromDesires = (desires: string[]) => {
  const concatonatedDesires = desires.join(":");

  return RelationshipKeyWords.filter(relationKeyword =>
    concatonatedDesires.includes(relationKeyword)
  );
};

const generateFamilyMember = ({
  originalNpcNameObject,
  race,
  relationTitle,
  seed
}: {
  originalNpcNameObject: INameDomainObject;
  race: IRace;
  relationTitle: string;
  seed: ISeed;
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
  const generatedRelation = generate({
    race,
    gender,
    shouldGenerateRelations: false, // lets stop some infinite recursion
    seed
  });

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

const randomTrait = (): string =>
  Utils.parseTemplate(Utils.pick(NPCData.traits));

const generateDesire = (): string =>
  Utils.parseTemplate(Utils.pick(NPCData.desires));

const functions = {
  generate,
  trait: randomTrait,
  desire: generateDesire
};

export default functions;
