const MagicItemData = require('./magic_items.json')
const Utils = require('../utils')

const _type = () => Utils.pick(MagicItemData.types);
const _powerLevel = () => Utils.pick(MagicItemData.power_levels);
const _schoolOfMagic = () => Utils.pick(MagicItemData.schools_of_magic);

const _effects = (schoolOfMagic, powerLevel) => {
    const effectsCount = Utils.parseTemplate(MagicItemData.item_effects_per_level[powerLevel])
    const schoolLevelMapKey = `${schoolOfMagic}:${powerLevel}`;
    return Utils.pick(MagicItemData.school_weapon_effects_per_level[schoolLevelMapKey], effectsCount, true)
        .map(Utils.parseTemplate)
}

const generate = props => {
    const type = (props.type) ? props.type : _type();
    const powerLevel = (props.powerLevel) ? props.powerLevel : _powerLevel();
    const schoolOfMagic = (props.schoolOfMagic) ? props.schoolOfMagic : _schoolOfMagic();
    const effects = (props.effects) ? props.effects : _effects(schoolOfMagic, powerLevel);

    return {
        type,
        powerLevel,
        schoolOfMagic,
        effects,
    }
}

const functions = {
    generate
}

module.exports = functions