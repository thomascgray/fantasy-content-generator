const SeedRandom = require('./seedrandom');

/**
 * pick 1 or more unique values from an array, and return a new array of those picked values
 * 
 * @param {any[]} array an array of values to pick from
 * @param {number} count how many unique array values to pick out
 * @param {boolean} returnAsArray if true, always return result as an array, even if only 1 item is picked
 */
const pick = (array, count = 1, returnAsArray = false, seed = null) => {
    const arrayCopy = Array.from(array)
    const pickedValues = []

    for (let i = 0; i < count; i++) {
        let pickedIndex = rand(0, arrayCopy.length - 1, seed);
        pickedValues.push(arrayCopy[pickedIndex]);
        arrayCopy.splice(pickedIndex, 1);
    }

    return (pickedValues.length === 1 && returnAsArray === false) ? pickedValues[0] : pickedValues;
}

/**
 * parse our special template syntax
 * 
 * handles multiple "kinds" of template syntax
 * 
 * a string container '{alpha/beta}' will choose one at random
 * 
 * a string starting with a $ symbol is a reference for any passed content
 *   so '{$colour}' becomes 'blue' if `content` was passed as { colour: 'blue' }
 * 
 * a string container using the linked format (symbol, double colon) e.g {X::aplha/beta}
 *   will ensure that any other placeholder in the string that uses the same linked symbol
 *   returns the same index of random that the first placeholder with that symbol did
 * 
 * @param {string} string 
 */
const parseTemplate = (string, content = {}, seed = null) => {
    const regex = /{(.+?)}/gm;

    const matches = string.match(regex);

    const linkedPlaceholderIndexes = {};

    if (matches) {
        // is our match a placeholder setup
        matches.forEach(match => {
            const linkedPlaceholderMatches = /{(.+?)::(.+?)}/gm.exec(match);
            if (linkedPlaceholderMatches) {
                const rawLinkToken = linkedPlaceholderMatches[1];
                if (linkedPlaceholderIndexes[rawLinkToken] != null) { // if we're already setup
                    let replacement = linkedPlaceholderMatches[2].split('/')[linkedPlaceholderIndexes[rawLinkToken]]
                    string = string.replace(match, replacement);
                } else { // if not, we need to do the first one and add the index into the linkedPlaceholderIndexes
                    const allPlaceholderChunks = linkedPlaceholderMatches[2].split('/');
                    const newIndex = rand(0, allPlaceholderChunks.length - 1, seed);
                    let replacement = allPlaceholderChunks[newIndex];
                    linkedPlaceholderIndexes[rawLinkToken] = newIndex; // set it up for further matches
                    string = string.replace(match, replacement);
                }
            }
        });

        matches.forEach(match => {
            if (match.charAt(1) === '$') {
                replacementVarName = match.substring(2, match.length - 1)
                string = string.replace(match, content[replacementVarName]);
            } else {
                let replacement = pick(match.substring(1).substring(0, match.length - 2).split('/'));
                string = string.replace(match, replacement);
            }
        })
    }

    return string;
}

/**
 * generate a random number between 2 inclusive values
 * 
 * @param {number} min minimum number to return (inclusive)
 * @param {number} max maximum number to return (inclusive)
 * @param {any} seed
 */
const rand = (min, max, seed = null) => {
    let randomFunc
    if (seed) {
        randomFunc = getSeededRandomFunc(seed);
    } else {
        randomFunc = Utils_rand_unseededRand;
    }
    min = parseInt(min);
    max = parseInt(max);
    return Math.floor(randomFunc() * (max - min + 1)) + min;
}

// these all have crazy names until i can prove they wont conflict in browser land
let Utils_rand_unseededRand = SeedRandom();
let Utils_rand_lastSeed = null;
let Utils_rand_lastSeededRandomFunc = null;
const getSeededRandomFunc = seed => {
    if (seed === Utils_rand_lastSeed) {
        return Utils_rand_lastSeededRandomFunc
    }
    Utils_rand_lastSeed = seed;
    Utils_rand_lastSeededRandomFunc = SeedRandom(seed);
    return Utils_rand_lastSeededRandomFunc;
}

/**
 * 
 * @param {number} number 
 * @param {function} func 
 */
const forCount = (number, func) => {
    for (let i = 0; i < number; i++) {
        func();
    }
}

const titleCase = string => string.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

const formatRace = race => {
    switch (race) {
        case 'halfOrc':
            return 'Half-Orc'
        case 'halfElf':
            return 'Half-Elf'
        default:
            return titleCase(race);
    }
}

const resetSeed = () => {
    Utils_rand_lastSeed = null;
    Utils_rand_lastSeededRandomFunc = null;
}

module.exports = {
    pick,
    parseTemplate,
    rand,
    forCount,
    titleCase,
    formatRace,
    resetSeed
}