import * as Utils from "../utils";
import MagicItemData from "./magic_items.json";
import Names from "../names";
import { IMagicItemGenerateProps } from "../interfaces";

const _type = () => Utils.pick(MagicItemData.types);
const _powerLevel = () => Utils.pick(MagicItemData.power_levels);
const _schoolOfMagic = type => {
  if (type === "weapon") {
    return Utils.pick(
      Object.keys(MagicItemData.school_weapon_effects_per_level)
    );
  }
  return Utils.pick(MagicItemData.schools_of_magic);
};

const _effects = (schoolOfMagic, powerLevel) => {
  // each power level of magic item can have a random number of effects. we leverage the template
  // parser to choose a number of effects
  const effectsCount = Utils.parseTemplate(
    MagicItemData.item_effects_per_level[powerLevel]
  );

  // pick a number of effects for the school and power level, for the count of effectsCount
  // we then run each effect through the template parser too, as the effects themselves contain parseable text
  return Utils.pickMany(
    MagicItemData.school_weapon_effects_per_level[schoolOfMagic][powerLevel],
    effectsCount
  ).map(Utils.parseTemplate);
};

const _tagline = formattedData => {
  const taglineTemplate = Utils.pick(MagicItemData.tagline_templates);
  const generationContent: any = {};

  if (taglineTemplate.includes("tagline_owned_word")) {
    generationContent.tagline_owned_word = Utils.pick(
      MagicItemData.tagline_owned_words
    );
  }

  if (taglineTemplate.includes("owner_first_name_possessive")) {
    const ownerFirstName = formattedData.owner.split(" ")[0];
    generationContent.owner_first_name_possessive =
      ownerFirstName.substr(-1) === "s"
        ? `${ownerFirstName}'`
        : `${ownerFirstName}'s`;
  }

  return Utils.parseTemplate(taglineTemplate, generationContent);
};

const generate = (props: IMagicItemGenerateProps = {}) => {
  let { seed, type, powerLevel, schoolOfMagic, effects, subtype } = props;

  seed = seed || globalThis.FantasyContentGeneratorSeed || Utils.generateUUID(); // eslint-disable-line

  return Utils.withSeed(seed, () => {
    type = type ? type : _type();
    powerLevel = powerLevel ? powerLevel : _powerLevel();
    schoolOfMagic = schoolOfMagic ? schoolOfMagic : _schoolOfMagic(type);
    effects = effects ? effects : _effects(schoolOfMagic, powerLevel);
    subtype = subtype ? subtype : Utils.pick(MagicItemData.subtypes[type]);

    const formattedData: any = {};

    switch (powerLevel) {
      case "greater":
      case "supreme":
        formattedData.owner = Names.generate().name;
        formattedData.tagline = _tagline(formattedData);
        break;
    }

    formattedData.title = `${subtype} of ${Utils.titleCase(
      powerLevel
    )} ${Utils.titleCase(schoolOfMagic)}`;

    return {
      type,
      subtype,
      powerLevel,
      schoolOfMagic,
      effects,
      formattedData
    };
  });
};

const functions = {
  generate
};

export default functions;
