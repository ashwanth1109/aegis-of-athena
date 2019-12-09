// https://www.codewars.com/kata/two-sum/train/javascript

// Two Sum
// 6 kyu

//===========================================
// IT IS GIVEN THAT THE INPUT WILL ALWAYS BE VALID
// AND WILL RESULT IN AN ANSWER
// SO NEED TO HANDLE TO ERROR CONDITIONS
//===========================================
twoSum = (numbers, target) => {
    checkSum = (a, b, sum) => (a + b === sum ? true : false);
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (checkSum(numbers[i], numbers[j], target)) {
                return [i, j];
            }
        }
    }
};

//===========================================
// TEST CASES
//===========================================
console.log(twoSum([1, 2, 3], 4)); // [0,2]
console.log(twoSum([1234, 5678, 9012], 14690)); // [1,2]
console.log(twoSum([2, 2, 3], 4)); // [0,1]
