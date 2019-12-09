// https://www.codewars.com/kata/take-a-ten-minute-walk/train/javascript

// Take a Ten Minute Walk
// 6 kyu

//===========================================
// LOGIC: All movements in x direction must cancel out
// All movements in y direction must cancel out
//===========================================
isValidWalk = (walk, x = 0, y = 0) => {
    for (const direction of walk) {
        direction === "n"
            ? y++
            : direction === "s"
            ? y--
            : direction === "e"
            ? x++
            : x--;
    }
    return x === 0 && y === 0 && walk.length === 10 ? true : false;
};

//===========================================
// TEST CASES
//===========================================
console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log(
    isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
);
console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));
