const Random = require("random-js")();

const pick = array => {
    return array[Random.integer(0, array.length - 1)];
}

module.exports = {
    pick
}