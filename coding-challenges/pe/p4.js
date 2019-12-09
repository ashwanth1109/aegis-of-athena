//------------------------------------------EULERS PROBLEM 4------------------------------------------
//------------------------------------------------------------------------------------

// Largest Palindrome Product
// A palindromic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

//------------------------------------------FUNCTIONS------------------------------------------

const isPalindrome = number => {
  let check = false;
  let numberString = number.toString();
  let reversedNumberString = numberString
    .split(``)
    .reverse()
    .join(``);
  if (reversedNumberString === numberString) check = true;
  return check;
};

const getProduct = (num1, num2) => num1 * num2;

//------------------------------------------INPUT------------------------------------------

let digitCount = 3;

//------------------------------------------CORE CODE------------------------------------------

let largestPalindrome = 0;
let range = [Math.pow(10, digitCount - 1), Math.pow(10, digitCount)];
for (let i = range[0]; i < range[1]; i++) {
  for (let j = range[0]; j < range[1]; j++) {
    let product = getProduct(i, j);
    if (isPalindrome(product)) {
      largestPalindrome =
        largestPalindrome < product ? product : largestPalindrome;
    }
  }
}

//------------------------------------------OUTPUT------------------------------------------

console.log(largestPalindrome);

//------------------------------------------------------------------------------------
