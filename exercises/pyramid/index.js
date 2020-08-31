// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {

    var pounds = '#';

    for (var i = 0; i < n; i++) {
       
        if (i != 0) {
            pounds += '##';
        }

        console.log(' '.repeat(n-(i+1)) + pounds + ' '.repeat(n-(i+1)));
    }

}

module.exports = pyramid;
