// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    var count = 0;
    var compare = str.toLowerCase();

    for (let char of compare){
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
            count++;
        }
    }

    return count;
}

module.exports = vowels;
