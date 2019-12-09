// https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

// RGB TO HEX CONVERSION
// 5 kyu

//===========================================
// DECIMAL TO HEXADECIMAL CONVERSION METHOD
//===========================================
// SOURCE: https://www.permadi.com/tutorial/numDecToHex/
//===========================================
// 1) Divide number by 16. Get quotient and remainder
// 2) Take quotient as new number and repeat step 1
// 3) Repeat steps until 0
// 4) Hex value is the digit sequence of remainders backwards
// Possibly use recursion?
//===========================================
mapToHex = {
    "10": "A",
    "11": "B",
    "12": "C",
    "13": "D",
    "14": "E",
    "15": "F"
};
decimalToHex = decimal => {
    decimal = decimal > 255 ? 255 : decimal < 0 ? 0 : decimal;
    const quotient = Math.floor(decimal / 16);
    let remainder = decimal % 16;
    if (remainder > 9) {
        remainder = mapToHex[remainder.toString()];
    }
    if (quotient === 0) {
        return remainder;
    } else {
        return `${decimalToHex(quotient)}${remainder}`;
    }
};
//===========================================
// REFACTORING & MINIFYING HEX CONVERTER
// BYE BYE CODE READABILITY, LOL
//===========================================
dToH = (
    d,
    d1 = d > 255 ? 255 : d < 0 ? 0 : d,
    q = Math.floor(d1 / 16),
    mod = d1 % 16,
    r = mod > 9 ? mapToHex[mod.toString()] : mod
) => (q ? `${dToH(q)}${r}` : r);

//===========================================
// TEST CASES
//===========================================
// console.log(decimalToHex(1128)); // should return 468
// console.log(decimalToHex(188)); // should return BC
// console.log(decimalToHex(590)); // should return 24E
// console.log(dToH(1128)); // should return 468
// console.log(dToH(188)); // should return BC
// console.log(dToH(590)); // should return 24E

rgb0 = (r, g, b) => {
    //===========================================
    // DECIMAL TO HEX CONVERTER
    //===========================================
    dToH = (
        d,
        d1 = d > 255 ? 255 : d < 0 ? 0 : d, // Handles extreme cases
        q = Math.floor(d1 / 16),
        mod = d1 % 16,
        r = mod > 9 ? mapToHex[mod.toString()] : mod
    ) => (q ? `${dToH(q)}${r}` : r);
    //===========================================
    // FUNCTION THAT TAKES IN HEX VALUE
    // 00 IF 0
    // ELSE THE HEX NUMBER
    //===========================================
    r20 = n => (n === 0 ? "00" : n);
    //===========================================
    // CONVERT R, G AND B TO HEX AND RETURN CONCAT STRING
    //===========================================
    return r20(dToH(r)) + r20(dToH(g)) + r20(dToH(b));
};

//===========================================
// TEST CASES
//===========================================
// console.log(rgb0(255, 255, 255)); // returns FFFFFF
// console.log(rgb0(255, 255, 300)); // returns FFFFFF
// console.log(rgb0(0, 0, 0)); // returns 000000
// console.log(rgb0(148, 0, 211)); // returns 9400D3

//===========================================
// COOL SOLUTIONS BY OTHERS
//===========================================
rgb1 = (r, g, b) => {
    toHex = d =>
        d < 0
            ? "00"
            : d > 255
            ? "FF"
            : ("0" + Number(d).toString(16)).slice(-2).toUpperCase();
    return toHex(r) + toHex(g) + toHex(b);
};
//===========================================
// NOTE: The "0" + slice(-2) is what handles the case
// when only single digit is returned
//===========================================

//===========================================
// TEST CASES
//===========================================
console.log(rgb1(255, 255, 255)); // returns FFFFFF
console.log(rgb1(255, 255, 300)); // returns FFFFFF
console.log(rgb1(0, 0, 0)); // returns 000000
console.log(rgb1(148, 0, 211)); // returns 9400D3
