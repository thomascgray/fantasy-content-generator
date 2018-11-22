/**
 * pick 1 or more unique values from an array, and return a new array of those picked values
 * 
 * @param {any[]} array an array of values to pick from
 * @param {number} count how many unique array values to pick out
 */
const pick = (array, count = 1) => {
    const arrayCopy = Array.from(array)
    const pickedValues = []

    for (let i = 0; i < count; i++) {
        let pickedIndex = rand(0, arrayCopy.length - 1);
        pickedValues.push(arrayCopy[pickedIndex]);
        arrayCopy.splice(pickedIndex, 1);
    }

    return pickedValues.length === 1 ? pickedValues[0] : pickedValues;
}

/**
 * 
 * 
 * @param {string} string 
 */
const parseTemplate = (string, content = {}) => {
    const regex = /{(.+?)}/gm;

    const matches = string.match(regex);

    if (matches) {
        matches.forEach(match => {
            if (match.charAt(1) === '$') {
                replacementVarName = match.substring(2, match.length-1)
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
 * 
 * 
 * @param {number} min minimum number to return (inclusive)
 * @param {number} max maximum number to return (inclusive)
 */
const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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

module.exports = {
    pick,
    parseTemplate,
    rand,
    forCount
}