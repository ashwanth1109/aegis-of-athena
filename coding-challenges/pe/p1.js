//------------------------------------------EULERS PROBLEM 1------------------------------------------
//------------------------------------------------------------------------------------

// MULTIPLES OF 3 AND 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// the positive integers (whole numbers) 1, 2, 3, etc., and sometimes zero as well.
// in this case: we will exclude 0 (not that it matters to get answer) and 1000

//------------------------------------------FUNCTIONS------------------------------------------

const isMultipleOf3 = num => !(num % 3);
const isMultipleOf5 = num => !(num % 5);

//------------------------------------------INPUT------------------------------------------

let limit = 1000;

//------------------------------------------CORE CODE------------------------------------------

let sumOfMultiples = 0;

// choice of while vs for - theoretically similar performance (stackoverflow)
// https://stackoverflow.com/questions/3629174/which-loop-is-faster-while-or-for

while (limit-- > 0) {
  if (isMultipleOf3(limit)) sumOfMultiples += limit;
  else if (isMultipleOf5(limit)) sumOfMultiples += limit;
}

//------------------------------------------OUTPUT------------------------------------------

console.log(sumOfMultiples);

//------------------------------------------------------------------------------------
