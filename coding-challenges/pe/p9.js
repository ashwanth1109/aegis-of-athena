//------------------------------------------EULERS PROBLEM 9------------------------------------------
//------------------------------------------------------------------------------------

// Special Pythagorean triplet

// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

//------------------------------------------FUNCTIONS------------------------------------------

const getSquare = num => num * num;

const reducer1 = (accumulator, currentValue) => accumulator * currentValue;
const reducer2 = (accumulator, currentValue) => accumulator + currentValue;
const getSum = array1 => array1.reduce(reducer2);
const getProduct = array1 => array1.reduce(reducer1);

const checkIfPythagoreanTriplet = (a, b, c) => {
  let array1 = [a, b, c];
  array1.sort();
  let check = false;
  if (
    getSum([getSquare(array1[0]), getSquare(array1[1])]) ===
    getSquare(array1[2])
  )
    check = true;
  return check;
};

//------------------------------------------INPUT------------------------------------------

let sum = 1000;

//------------------------------------------CORE CODE------------------------------------------

let pythagoreanTriplet = [1];
for (let i = 1; i < sum / 2; i++) {
  for (let j = 1; j < sum / 2; j++) {
    for (let k = 1; k < sum / 2; k++) {
      if (checkIfPythagoreanTriplet(i, j, k)) {
        if (getSum([i, j, k]) === sum) {
          pythagoreanTriplet = [i, j, k];
        }
      }
    }
  }
}
const output = getProduct(pythagoreanTriplet);

//------------------------------------------OUTPUT------------------------------------------

console.log(output);

//------------------------------------------------------------------------------------
