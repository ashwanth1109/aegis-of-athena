// https://www.hackerrank.com/challenges/a-very-big-sum/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

const aVeryBigSum = ar => {
  let sum = 0;
  for (const item of ar) {
    sum += item;
  }
  return sum;
};

console.log(
  aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
);
