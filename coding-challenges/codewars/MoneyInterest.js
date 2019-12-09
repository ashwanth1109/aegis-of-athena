// https://www.codewars.com/kata/money-money-money/train/javascript

// Money, Money, Money
// 7 kyu

//===========================================
// p - principal, i - interest rate, t - tax rate, d - desired sum, y - years
//===========================================
calculateYears1 = (p, i, t, d, y = 0) => {
    while (p < d) {
        const interest = i * p;
        const tax = t * interest;
        p += interest - tax;
        y++;
    }
    return y;
};
//===========================================
// OPTIMIZING SOLUTION
//===========================================
calculateYears2 = (p, i, t, d, y = 0) => {
    while (p < d) {
        p += i * p * (1 - t);
        y++;
    }
    return y;
};
//===========================================
// TRYING TO SOLVE USING RECURSION
//===========================================
calculateYears3 = (p, i, t, d, y = 0) =>
    p < d ? calculateYears3(p * i * (1 - t), i, t, d, y + 1) : y;
//===========================================
// EXCEEDING CALL STACK ERROR, SOMETHING IS WRONG
//===========================================
//===========================================
// BREAKING DOWN THE PROBLEM INTO STEPS
//===========================================
calculateYears4 = (p, i, t, d, y = 0) => {
    // console.log(`P is ${p}. D is ${d}. y is ${y}`);
    if (p < d) {
        const newP = p * (1 + i * (1 - t));
        return calculateYears4(newP, i, t, d, y + 1);
        // return newP;
    } else {
        return y;
    }
};
//===========================================
// ERROR: P needs to be added to I after T.
// CORRECTED SOLN IS AS BELOWS
//===========================================
calculateYears5 = (p, i, t, d, y = 0) =>
    p < d ? calculateYears5(p * (1 + i * (1 - t)), i, t, d, y + 1) : y;

//===========================================
// COOL SOLUTIONS BY OTHERS
//===========================================
calculateYears6 = (p, i, t, d) =>
    Math.ceil(Math.log(d / p) / Math.log(1 + i * (1 - t)));
//===========================================
// WHY DOES THIS WORK?
// Math.log returns natural logarithm of a given number
//===========================================
//===========================================
// Math.log(a) / Math.log(b) => is log a (base b)
// d / p is ratio of desired amount to principal
// (1 + i * (1 - t)) ^ y > ratio of p to d
//===========================================

// console.log(calculateYears5(1000, 0.05, 0.18, 1100)); // O/P => 3
// console.log(calculateYears5(1000, 0.01625, 0.18, 1200)); // O/P => 14
// console.log(calculateYears5(1000, 0.05, 0.18, 1000)); // O/P => 0
