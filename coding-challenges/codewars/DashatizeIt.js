//===========================================
// https://www.codewars.com/kata/58223370aef9fc03fd000071
//
// Dashatize It
// 6 kyu
//===========================================

dashatize0 = num => {
    const splitNum = (num, numArr = [], modArr = [num % 10, ...numArr]) =>
        num > 9 ? splitNum(Math.floor(num / 10), modArr) : modArr;
    const numArr = splitNum(Math.abs(num));
    const isEven = n => (n % 2 === 0 ? true : false);
    return numArr.reduce((acc, cur, id, src) => {
        if (isEven(cur)) {
            // even numbers
            return acc + cur;
        } else {
            // odd numbers
            if (id === 0) {
                // 1st number is odd
                return isEven(src[1]) ? acc + cur + "-" : acc + cur; // check if 2nd num is even
            } else {
                return isEven(src[id + 1])
                    ? acc + "-" + cur + "-"
                    : acc + "-" + cur;
            }
        }
    }, "");
};

//===========================================
// REFACTORED SOLN - BYE BYE CODE READABILITY
//===========================================
dashatize = n => {
    const split = (n, arr1 = [], arr2 = [n % 10, ...arr1]) =>
        n > 9 ? split(Math.floor(n / 10), arr2) : arr2; // func to split n into its digits
    const isEven = n => (n % 2 === 0 ? true : false); // func to check if n is even
    return split(Math.abs(n)).reduce(
        (acc, cur, id, src) =>
            isEven(cur)
                ? acc + cur // number is even
                : id === 0 // if 1st num is odd
                ? isEven(src[1]) // check if 2nd is even
                    ? acc + cur + "-" // if 2nd num is even
                    : acc + cur // if 2nd num is odd
                : isEven(src[id + 1]) // if not 1st num
                ? acc + "-" + cur + "-" // if next num is even
                : acc + "-" + cur, // if next num is odd
        ""
    );
};

//===========================================
// TEST CASES
//===========================================
console.log(dashatize(274));
console.log(dashatize(6815));
console.log(dashatize(1));

//===========================================
// COOL SOLUTIONS BY OTHERS - 1
//===========================================
function dashatize(num) {
    return String(num)
        .replace(/([13579])/g, "-$1-")
        .replace(/--+/g, "-")
        .replace(/(^-|-$)/g, "");
}

//===========================================
// COOL SOLUTIONS BY OTHERS - 2
//===========================================
function dashatize(num) {
    return isNaN(num)
        ? "NaN"
        : num
              .toString()
              .match(/([13579]|[02468]+)/g)
              .join("-");
}
