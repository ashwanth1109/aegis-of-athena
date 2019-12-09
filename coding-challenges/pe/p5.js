//------------------------------------------EULERS PROBLEM 5------------------------------------------
//------------------------------------------------------------------------------------

// Smallest multiple

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

//------------------------------------------------------------------------------------

//------------------------------------------FUNCTIONS------------------------------------------

const isMultiple = (num, div) => {
  let check = false;
  if (!(num % div)) check = true;
  return check;
};

const isDivisibleUptoLimit = (num, limit) => {
  let check = true;
  for (let i = 1; i <= limit; i++) {
    if (!isMultiple(num, i)) {
      check = false;
    }
  }
  return check;
};

//------------------------------------------INPUT------------------------------------------

let number = 20;

//------------------------------------------CORE CODE------------------------------------------

let smallestDivisibleNumber = 0,
  iter = number + 1;
while (!smallestDivisibleNumber) {
  if (isDivisibleUptoLimit(iter, number)) {
    smallestDivisibleNumber = iter;
  }
  iter++;
}

//------------------------------------------OUTPUT------------------------------------------

console.log(smallestDivisibleNumber);

//------------------------------------------------------------------------------------

//------------------------------------------COMMENTS------------------------------------------
// Not the most optimum solution
// Come back to this problem later
// Need to tweak isDivisibleToLimit first
// No need to check with the entire range if even one fails right?
