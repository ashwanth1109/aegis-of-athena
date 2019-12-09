// https://www.hackerrank.com/challenges/birthday-cake-candles/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

const birthdayCakeCandles = ar => {
  const max = Math.max(...ar);
  const result = ar.filter(item => item === max);
  return result.length;
};

birthdayCakeCandles([1, 2, 4, 3, 2, 4]);
