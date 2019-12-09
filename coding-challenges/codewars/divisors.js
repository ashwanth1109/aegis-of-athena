const divisors = integer => {
    const retArray = [];
    for (let i = 2; i < integer; i++) {
        if (integer % i === 0) {
            retArray.push(i);
        }
    }
    if (retArray.length >= 1) {
        return retArray;
    } else {
        return `${integer} is a prime`;
    }
};

console.log(divisors(12));
console.log(divisors(25));
console.log(divisors(13));
