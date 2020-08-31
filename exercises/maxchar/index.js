// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const obj = {};

    for (let character of str) {
        obj[character] = obj[character]++ || 1;
    }

    var count = 0;
    var letter = '';

    for (let char in obj) {
        if (obj[char] > count){
            count = obj[char];
            letter = char;
        }
    }

    return letter;


}

module.exports = maxChar;
