//------------------------------------------EULERS PROBLEM 6------------------------------------------
//------------------------------------------------------------------------------------

// Sum Square Difference

// The sum of the squares of the first ten natural numbers is,
// 12 + 22 + ... + 102 = 385

// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)2 = 552 = 3025

// Hence the difference between the sum of the squares of the first ten natural numbers
// and the square of the sum is 3025 − 385 = 2640.
// Find the difference between the sum of the squares of the first
// one hundred natural numbers and the square of the sum.

//------------------------------------------FUNCTIONS------------------------------------------

const getSquare = num => num * num;

const reducer = (accumulator, currentValue) => accumulator + currentValue;
const getSum = array1 => array1.reduce(reducer);

const squareOfSum = number => {
  let numbers = [];
  for (let i = 1; i <= number; i++) {
    numbers.push(i);
  }
  return getSquare(getSum(numbers));
};

const sumOfSquares = number => {
  let numbers = [];
  for (let i = 1; i <= number; i++) {
    numbers.push(getSquare(i));
  }
  return getSum(numbers);
};

const getDiff = (num1, num2) => num2 - num1;

//------------------------------------------INPUT------------------------------------------

let limit = 100;

//------------------------------------------CORE CODE------------------------------------------

let diff = getDiff(sumOfSquares(limit), squareOfSum(limit));

//------------------------------------------OUPUT------------------------------------------

console.log(diff);

//------------------------------------------------------------------------------------
