// https://www.codewars.com/kata/give-me-a-diamond/train/javascript

// Give Me A Diamond
// 6 kyu

diamond = (n, diamStr = "") => {
    //===========================================
    // FUNCTION TO APPEND SPACE
    //===========================================
    addSpace = str => `${str} `;
    //===========================================
    // FUNCTION TO APPEND
    //===========================================
    addStar = str => `${str}*`;
    //===========================================
    // FUNCTION TO APPEND NEW LINE
    //===========================================
    addNewLine = str => `${str}\n`;
    //===========================================
    // FUNCTION TO ITERATE A FUNCTION ON A STRING
    //===========================================
    iterateOnString = (n, func, str) => {
        for (i = 0; i < n; i++) {
            str = func(str);
        }
        return str;
    };
    //===========================================
    // THIS CONDITION CHECKS FOR NEGATIVE AND EVEN
    //===========================================
    if (!(n < 0 || !(n % 2))) {
        for (let i = 0; i < (n - 1) / 2; i++) {
            const numOfStars = 1 + i * 2;
            const numOfSpaces = (n - numOfStars) / 2;
            diamStr = iterateOnString(numOfSpaces, addSpace, diamStr);
            diamStr = iterateOnString(numOfStars, addStar, diamStr);
            diamStr = iterateOnString(1, addNewLine, diamStr);
        }
        for (let i = (n - 1) / 2; i >= 0; i--) {
            diamStr = iterateOnString((n - (1 + i * 2)) / 2, addSpace, diamStr);
            diamStr = iterateOnString(1 + i * 2, addStar, diamStr);
            diamStr = iterateOnString(1, addNewLine, diamStr);
        }
    } else return null;
    return diamStr;
};
//===========================================
// REFACTOR IDEA: COMBINE ADDSPACE, ADDSTAR and ADDNEWLINE
// FUNCTION BY PASSING IN THE CHARACTER TO BE ADDED - DUH!
//===========================================

console.log(diamond(5));

//===========================================
// COOL SOLUTIONS BY OTHERS
//===========================================
function diamond(n) {
    //===========================================
    // HANDLING NULL CHECK FOR NEGATIVE OR EVEN
    //===========================================
    if (n % 2 == 0 || n < 1) return null;
    var x = 0,
        add,
        diam = line(x, n); // CREATING THE CENTRAL PART OF STRING
    while ((x += 2) < n) {
        //===========================================
        // WITH EACH ITERATION, CREATE THE LINES ABOVE AND BELOW
        //===========================================
        add = line(x / 2, n - x);
        //===========================================
        // ADD NEWLY CREATED LINES BEFORE AND AFTER
        //===========================================
        diam = add + diam + add;
    }
    return diam;
}
function repeat(str, x) {
    return Array(x + 1).join(str);
}
function line(spaces, stars) {
    return repeat(" ", spaces) + repeat("*", stars) + "\n";
}
