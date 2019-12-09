// https://www.codewars.com/kata/sum-of-the-first-nth-term-of-series/train/javascript

SeriesSum = (n, sum = 0) => {
    for (i = 0; i < n; i++) {
        sum += 1 / (1 + i * 3);
    }
    return sum.toFixed(2);
};

//===========================================
// TEST CASE
//===========================================
// console.log(SeriesSum(500000000));

//===========================================
// COOL SOLUTIONS BY OTHERS
//===========================================
SeriesSum2 = (n, s = 0) =>
    n ? SeriesSum(n - 1, s + 1 / (3 * n - 2)) : s.toFixed(2);
console.log(SeriesSum(500000000));
//===========================================
// TAKEAWAYS:
// 1) Although code readability is low, love the brevity
// 2) I am not sure about performance because recursion is used
// But recursion is expected to perform better on memoization
// 3) Performance is comparable but still lower than first soln
// when using higher numbers
//===========================================
