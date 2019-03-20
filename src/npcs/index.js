const Names = require('../names');
const Utils = require('../utils');
let NameData = require('../data/names.json')
let NPCData = require('../data/npcs.json')

if (process.env.ENVIRONMENT === 'test') {
    NameData = require('../../stubData/names.json')
    NPCData = require('../../stubData/npcs.json')
}

const RelationshipKeyWords = [
    'mother',
    'father',
    'son',
    'daughter',
    'brother',
    'sister'
]

/**
 * 
 * @param {object} props 
 * @param {string} props.seed
 * @param {string} props.race
 * @param {string} props.gender
 * @param {string} props.name
 */
const generate = (props = {}) => {
    Utils.resetSeed();

    const seed = props.seed ? props.seed : Utils.generateUUID();
    const traits = Utils.pick(NPCData.traits, 2, true, seed).map(val => Utils.parseTemplate(val, null, seed));
    const desires = Utils.pick(NPCData.desires, 1, true, seed).map(val => Utils.parseTemplate(val, null, seed));
    const race = props.race ? props.race : Utils.pick(Object.keys(NameData), 1, false, seed)
    const gender = props.gender ? props.gender : Utils.pick(['male', 'female'], 1, false, seed)
    const name = Names.generate({ race, gender, seed, shouldResetSeed: false });

    const relations = []

    if (props.shouldGenerateRelationships) {
        relations = generateRelationships({ race, gender, desires })
    }

    const formattedData = {
        name,
        gender: Utils.titleCase(gender),
        race: Utils.formatRace(race),
        traits,
        desires,
    }

    if (props.shouldGenerateRelationships) {
        formattedData.relations = relations;
    }

    const npc = {
        name,
        gender,
        race,
        traits,
        desires,
        seed,
        formattedData
    }

    if (props.shouldGenerateRelationships) {
        npc.relations = relations;
    }

    return npc
}

const getRelationTitlesFromDesires = desires => {
    const concatonatedDesires = desires.join(':');

    return RelationshipKeyWords
        .filter(relationKeyword => concatonatedDesires.includes(relationKeyword))
}

const generateRelationships = ({ race, gender, desires }) => {
    const relationTitles = getRelationTitlesFromDesires(desires);

    return relationTitles.map(relationTitle => {
        switch (relationTitle) {
            case 'father':
                return {
                    relationTitle,
                    npc: generateFather(race)
                }
            case 'mother':
                return {
                    relationTitle,
                    npc: generateMother(race)
                }
            case 'brother':
                return {
                    relationTitle,
                    npc: generateBrother(race)
                }
            case 'sister':
                return {
                    relationTitle,
                    npc: generateSister(race)
                }
            case 'son':
                return {
                    relationTitle,
                    npc: generateSon(race)
                }
            case 'daughter':
                return {
                    relationTitle,
                    npc: generateDaughter(race)
                }
        }
    })
}

const generateFather = (race) => generate({ race, gender: 'male' })
const generateMother = (race) => generate({ race, gender: 'female' })
const generateBrother = (race) => generate({ race, gender: 'male' })
const generateSister = (race) => generate({ race, gender: 'female' })
const generateSon = (race) => generate({ race, gender: 'male' })
const generateDaughter = (race) => generate({ race, gender: 'female' })

const functions = {
    generate,
    trait: () => Utils.parseTemplate(Utils.pick(NPCData.traits)),
    desire: () => Utils.parseTemplate(Utils.pick(NPCData.desires))
}

if (process.env.ENVIRONMENT === 'test') {
    functions.getRelationTitlesFromDesires = getRelationTitlesFromDesires
    functions.generateRelationships = generateRelationships;
}

module.exports = functions