// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    var rowcount = 0,
        colcount = 0,
        rowmin = 0,
        rowmax = n-1,
        colmin = 0,
        colmax = n-1,
        maxnum = n*n;
        currnum = 1;
    
    // create array of zeros
    const arr = [];
    for (var i = 0; i < n; i++){
        arr.push([]);
    }
    console.log(arr);

    // perform spirals

    while (currnum <= maxnum) {

    // CORNER CATCHERS
        // STARTER
        if (colcount == 0 && rowcount == 0) {
            addNum();
            colcount++;
        }
        // TOP RIGHT CORNER
        else if (colcount == colmax && rowcount == rowmin) {
            addNum();
            rowcount++;
        }
        // BOTTOM RIGHT CORNER
        else if (colcount == colmax && rowcount == rowmax) {
            addNum();
            rowmin++;
            colcount--;
        }
        // BOTTOM LEFT CORNER
        else if (colcount == colmin && rowcount == rowmax) {
            addNum();
            colmax--;
            rowcount--;
        }
        // TOP LEFT CORNER
        else if (colcount == colmin && rowcount == rowmin) {
            addNum();
            colcount++;
            rowmax--;
        }
    
    // SPIRAL IT OUT!

        // LEFT TO RIGHT
        else if (colcount < colmax && rowcount == rowmin) {
            addNum();

            if (colcount == rowcount){
                colmin++; 
            }

            colcount++;
        }

        // TOP TO BOTTOM
        else if (colcount == colmax && rowcount < rowmax) {
            addNum();
            rowcount++;
        }

        // RIGHT TO LEFT
        else if (colcount > colmin && rowcount == rowmax) {
            addNum();
            colcount--;
        }

        // LEFT TO TOP
        else if (colcount == colmin && rowcount > rowmin) {
            addNum();
            rowcount--;
        }


        // INDEF LOOP CATCH
        else {
            currnum++;
        }

    }

    function addNum () {
        arr[rowcount][colcount] = currnum;
        currnum++;
    }

    console.log(maxnum);
    console.log(arr);
    return arr;
}

module.exports = matrix;
