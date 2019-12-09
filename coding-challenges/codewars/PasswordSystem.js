// ------------------------------------------------------------
// https://www.codewars.com/kata/57a23e3753ba332b8e0008da
//
// 7 kyu
// ------------------------------------------------------------

// helpZoom = (key, n = Math.sqrt(key.length)) => {
//     if (n !== Math.floor(n)) return "No";
//     sliceIndex = key.length % 2 === 0 ? key.length / 2 : (key.length - 1) / 2;
//     console.log(sliceIndex);
//     // n = n % 2 === 0 ? n : n - 1;
//     const arr1 = key.slice(0, Math.floor(n / 2));
//     console.log(arr1);
//     return "Yes";
// };
// ------------------------------------------------------------
// Okay, I'm having a bad day
// ------------------------------------------------------------

// ------------------------------------------------------------
// Giving this problem another shot
// ------------------------------------------------------------
helpZoom = (arr, len = arr.length) => {
    // ------------------------------------------------------------
    // Validity check - see if the array has n * n integers
    // i.e. it must be a square root
    // ------------------------------------------------------------
    if (Math.sqrt(len) % 1 !== 0) return "No";
    // ------------------------------------------------------------
    // If odd, midpoint exists
    // ------------------------------------------------------------
    else if (len % 2 !== 0) {
        const midpoint = (len - 1) / 2;
        // ------------------------------------------------------------
        // Slice firstArr upto midpoint excluding midpoint
        // ------------------------------------------------------------
        const firstArr = arr.slice(0, midpoint);
        // ------------------------------------------------------------
        // Slice secondArr from midpoint upto end excluding midpoint | Reverse it
        // ------------------------------------------------------------
        const secondArr = arr.slice(midpoint + 1, len).reverse();
        // ------------------------------------------------------------
        // Compare both arrays
        // ------------------------------------------------------------
        for (let i = 0; i < firstArr.length; i++) {
            if (firstArr[i] !== secondArr[i]) return "No";
        }
        return "Yes";
    }
    // ------------------------------------------------------------
    // Else it is even, midpoint doesnt exist
    // ------------------------------------------------------------
    else {
        // ------------------------------------------------------------
        // Slice firstArr up to len/2
        // ------------------------------------------------------------
        const firstArr = arr.slice(0, len / 2);
        // ------------------------------------------------------------
        // Slice secondArr from len/2
        // ------------------------------------------------------------
        const secondArr = arr.slice(len / 2, len).reverse();
        // ------------------------------------------------------------
        // Compare both arrays
        // ------------------------------------------------------------
        for (let i = 0; i < firstArr.length; i++) {
            if (firstArr[i] !== secondArr[i]) return "No";
        }
        return "Yes";
    }
};

// ------------------------------------------------------------
// Optimizing Solution
// ------------------------------------------------------------
helpZoom0 = (arr, len = arr.length) => {
    arrEqualityCheck = (arr1, arr2) => {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    };
    if (Math.sqrt(len) % 1 !== 0) return "No";
    else if (len % 2 !== 0)
        // prettier-ignore
        arrEqualityCheck(arr.slice(0, (len - 1) / 2), arr.slice((len - 1) / 2 + 1, len).reverse()) ? "Yes" : "No";
    else
        // prettier-ignore
        arrEqualityCheck(arr.slice(0, len / 2), arr.slice(len / 2, len).reverse()) ? "Yes" : "No";
};

// ------------------------------------------------------------
// TEST CASE
// ------------------------------------------------------------
console.log(helpZoom0([1, 1, 0, 0, 0, 0, 0, 1, 1])); // Yes
console.log(helpZoom0([1, 1, 0, 0, 0, 0, 1, 1, 0])); // No
console.log(helpZoom0([1, 0, 0, 1])); // Yes

// ------------------------------------------------------------
// Cool solutions by others
// ------------------------------------------------------------
function helpZoom1(key) {
    var n = Math.sqrt(key.length);
    if (key.length === 0 || n % 1 !== 0) {
        return "No";
    }
    for (let i = 0; i < key.length / 2; i++) {
        if (key[i] !== key[key.length - 1 - i]) {
            return "No";
        }
    }
    return "Yes";
}

function helpZoom2(key) {
    return key.join("") === key.reverse().join("") &&
        !(Math.sqrt(key.length) % 1)
        ? "Yes"
        : "No";
}
