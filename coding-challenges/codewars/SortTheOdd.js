// ------------------------------------------------------------
// https://www.codewars.com/kata/sort-the-odd/train/javascript
// 6 kyu
// ------------------------------------------------------------

// ------------------------------------------------------------
// Sort The Odd
// ------------------------------------------------------------
sortArray = arr => {
    // ------------------------------------------------------------
    // Iterate through all elements in array
    // ------------------------------------------------------------
    for (let i = 0; i < arr.length; i++) {
        // ------------------------------------------------------------
        // check if element is odd
        // ------------------------------------------------------------
        if (arr[i] % 2) {
            let min = i; // initialize position of min element
            // ------------------------------------------------------------
            // Iterate through all elements after to find smallest odd
            // ------------------------------------------------------------
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] % 2) min = arr[min] < arr[j] ? min : j; // identify position of min element
            }
            // ------------------------------------------------------------
            // Swap the positions of element at i position with element at min position
            // ------------------------------------------------------------
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr;
};

// ------------------------------------------------------------
// Without comments
// ------------------------------------------------------------
sortArray0 = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2) {
            let min = i;
            for (let j = i + 1; j < arr.length; j++)
                if (arr[j] % 2) min = arr[min] < arr[j] ? min : j;
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr;
};

// ------------------------------------------------------------
// Test Cases
// ------------------------------------------------------------
console.log(sortArray0([5, 3, 2, 8, 1, 4])); // [1, 3, 2, 8, 5, 4]

// ------------------------------------------------------------
// Cool Solutions By Others
// ------------------------------------------------------------
function sortArray(array) {
    const odd = array.filter(x => x % 2).sort((a, b) => a - b);
    return array.map(x => (x % 2 ? odd.shift() : x));
}
