const palindromes = function (word) {
    const noSpaces = word.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
    const array = noSpaces.split('');
    const backwardsArray = array.reverse();
    const backwards = backwardsArray.join('');
    return noSpaces === backwards ? true : false



};

// Do not edit below this line
module.exports = palindromes;
