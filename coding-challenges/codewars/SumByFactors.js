//===========================================
// https://www.codewars.com/kata/54d496788776e49e6b00052f/train/javascript
//
// Sum By Factors
// 4 kyu
//===========================================

sumOfDivided = (arr, primeFactors = []) => {
    // FUNCTION TO CHECK IF PRIME NUMBER
    isPrime = n => {
        for (let i = 2; i <= n / 2; i++) if (n % i === 0) return false;
        return true;
    };
    // FUNCTION TO FIND ALL PRIME FACTORS
    findPrimeFactors = n => {
        for (let i = 2; i <= Math.abs(n); i++) {
            if (n % i === 0)
                if (isPrime(i))
                    if (!primeFactors.includes(i)) primeFactors.push(i); // find prime factors & if it doesnt exist in array, add it
        }
    };
    arr.forEach(item => findPrimeFactors(item)); // get all prime factors
    primeFactors.sort((a, b) => a - b);
    return primeFactors.map(primeFactor => {
        let sum = 0;
        arr.forEach(
            item => (sum = item % primeFactor === 0 ? sum + item : sum)
        );
        return [primeFactor, sum]; // return prime factor and its sum as an array
    });
};

console.log(sumOfDivided([-29804, -4209, -28265, -72769, -31744]));

//===========================================
// COOL SOLUTIONS BY OTHERS - 1
//===========================================
function sumOfDivided1(lst) {
    if (lst.length == 0) {
        return [];
    }
    var m = Math.max.apply(null, lst.map(Math.abs)),
        primes = [],
        marked = Array(m + 1);

    for (var i = 2; i <= m; ++i) {
        if (marked[i]) continue;

        var sum = 0,
            isMul = false;
        lst.forEach(function(n) {
            if (n % i == 0) {
                sum += n;
                isMul = true;
            }
        });
        if (isMul) primes.push([i, sum]);

        for (var j = 2 * i; j <= m; j += i) {
            marked[j] = true;
        }
    }

    return primes;
}

//===========================================
// COOL SOLUTIONS BY OTHERS - 2
//===========================================
function sumOfDivided2(lst) {
    var max = Math.max(...lst.map(x => Math.abs(x))),
        isPrime = x => {
            for (var i = 2; i * i <= x; i++) if (x % i === 0) return false;
            return true;
        };
    var sums = {};
    for (var i = 2; i <= max; i++)
        if (isPrime(i)) {
            lst.forEach(x => {
                if (x % i === 0) sums[i] = x + (sums[i] || 0);
            });
        }
    return Object.keys(sums).map(i => [+i, sums[i]]);
}

//===========================================
// COOL SOLUTIONS BY OTHERS - 3
//===========================================
const sumOfDivided3 = a =>
    a
        .reduce((r, e) => r.concat(getFactors(e)), [])
        .filter((e, i, a) => i === a.indexOf(e))
        .sort((x, y) => x - y)
        .map(x => [x, a.reduce((r, e) => r + (e % x ? 0 : e), 0)]);

const getFactors = n => {
    const factors = [];
    for (let i = 2, x = Math.abs(n); i <= x; i++)
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    return factors;
};
