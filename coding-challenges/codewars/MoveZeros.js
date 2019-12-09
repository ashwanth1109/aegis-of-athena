//===========================================
// https://www.codewars.com/kata/moving-zeros-to-the-end/train/javascript
//
// Moving zeros to the end
// 5 kyu
//===========================================

moveZeros = (arr, nonZero = [], zero = []) => {
    for (const item of arr) {
        item === 0 ? zero.push(0) : nonZero.push(item);
    }
    return [...nonZero, ...zero];
};
//===========================================
// wow, that was a lot easier than I thought
//===========================================

//===========================================
// trying a different approach cuz I still have time,
// perhaps I can use filter
//===========================================
moveZeros1 = arr => {
    return [
        ...arr.filter(item => item !== 0),
        ...arr.filter(item => item === 0)
    ];
};

//===========================================
// TEST CASES
//===========================================
console.log(moveZeros1([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
