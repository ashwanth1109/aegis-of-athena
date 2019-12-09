// https://www.codewars.com/kata/exes-and-ohs/train/javascript

// Exes and Ohs
// 7 kyu

XO = str => {
    const numOfX = str.split("x").length + str.split("X").length - 2;
    const numOfO = str.split("o").length + str.split("O").length - 2;
    // return numOfO === numOfX ? true : false;
    return numOfO === numOfX;
};

//===========================================
// MINIFYING SOLN FOR FUN
//===========================================
XO2 = str =>
    str.split("x").length + str.split("X").length ===
    str.split("o").length + str.split("O").length;

//===========================================
// COOL SOLUTIONS BY OTHERS
// BASED ON REGEX
//===========================================
XO3 = str => {
    let x = str.match(/x/gi);
    console.log(x);
    let o = str.match(/o/gi);
    console.log(o);
    return (x && x.length) === (o && o.length);
};

console.log(XO3("xxOomxO"));
