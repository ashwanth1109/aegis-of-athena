// https://www.codewars.com/kata/bit-counting/train/javascript

// Bit Counting
// 6 kyu

countBits1 = n => {
    bitizer = (n, b = "") => {
        if (n > 0) {
            b += (n % 2).toString();
            n = Math.floor(n / 2);
            return bitizer(n, b);
        }
        return b;
    };
    reverseString = str =>
        str
            .split("")
            .reverse()
            .join("");
    // console.log(reverseString("Hello World"));
    binaryConverterString = n => reverseString(bitizer(n));
    checkForOnes = str =>
        str
            .split("")
            .reduce((acc, val) =>
                val === "1" ? Number(acc + 1) : Number(acc)
            );

    //===========================================
    // TESTING REDUCE FUNCTION
    //===========================================
    // const arr1 = ["1", "0", "1"];
    // const reducer = (acc, currentVal) => {
    //     if (currentVal === "1") return Number(acc + 1);
    //     else return Number(acc);
    // };
    // console.log(arr1.reduce(reducer));

    return checkForOnes(binaryConverterString(n));
};

//===========================================
// REFACTORING COUNT BITS
//===========================================
countBits2 = n => {
    bitizer = (n, b = "") =>
        n > 0 ? bitizer(Math.floor(n / 2), b + (n % 2).toString()) : b;
    binaryConverterString = n =>
        bitizer(n)
            .split("")
            .reverse()
            .join("");
    checkForOnes = str =>
        str
            .split("")
            .reduce(
                (acc, val) => (val === "1" ? Number(acc + 1) : Number(acc)),
                0
            );
    return checkForOnes(binaryConverterString(n));
};

// console.log(countBits2(1234)); // O/P => 5

//===========================================
// COOL SOLUTIONS BY OTHERS
//===========================================
countBits3 = n =>
    n
        .toString(2)
        .split("0")
        .join("").length;

// console.log(countBits3(1234));
//===========================================
// TAKEAWAYS - toString has a binary conversion method, wow!
//===========================================

//===========================================
// TAKING THIS SOLN ONE STEP FURTHER
//===========================================
countBits4 = n => n.toString(2).split("1").length - 1;
console.log(countBits4(1234));
