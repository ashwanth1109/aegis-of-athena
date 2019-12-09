// https://www.hackerrank.com/challenges/diagonal-difference/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

const diagonalDifference = arr => {
  let diagonal1 = 0,
    diagonal2 = 0;
  for (let i = 0; i < arr.length; i++) {
    diagonal1 += arr[i][i];
    diagonal2 += arr[i][arr.length - 1 - i];
  }
  return Math.abs(diagonal1 - diagonal2);
};

console.log(diagonalDifference([[1, 2, 3], [4, 5, 6], [9, 8, 9]]));
