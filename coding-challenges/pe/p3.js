//------------------------------------------EULERS PROBLEM 3------------------------------------------
//------------------------------------------------------------------------------------

// Largest prime factor

// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

//------------------------------------------FUNCTIONS------------------------------------------

const isPrime = num => {
  let check = true;
  for (let i = 2; i < Math.ceil(num / 2); i++) {
    console.log(i);
    if (!(num % i)) {
      check = false;
    }
  }
  return check;
};

const isFactor = (num, div) => {
  let check = false;
  if (!(num % div)) {
    check = true;
  }
  return check;
};

const incrementToNextPrime = num => {
  do {
    num++;
  } while (!isPrime(num));
  return num;
};

//------------------------------------------INPUT------------------------------------------

let input = 600851475143;

//------------------------------------------CORE CODE------------------------------------------

let primeFactors = [],
  check = true,
  num = input,
  primeNumber = 2;
console.log(`Just before while loop`);
while (!isPrime(num)) {
  console.log(`Entering while loop`);
  console.log(num);
  if (isFactor(num, primeNumber)) {
    primeFactors.push(primeNumber);
    num = num / primeNumber;
  } else {
    primeNumber = incrementToNextPrime(primeNumber);
  }
}
primeFactors.push(num);

//------------------------------------------OUTPUT------------------------------------------

console.log(primeFactors);

//------------------------------------------------------------------------------------

//------------------------------------------FAILED ATTEMPTS LOG------------------------------------------

// failed attempts: 2 different approaches failed
// 1st method: normal way of calculating primes and factors
// 2nd method: calculation of prime factors by dividing by smallest prime and storing the quotient as the number to divide
// However, both methods work perfectly on smaller numbers

// STATUS: UNSOLVED
