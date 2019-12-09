// https://www.hackerrank.com/challenges/plus-minus/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

const plusMinus = arr => {
  let positive = 0,
    negative = 0,
    zero = 0;

  for (const item of arr) {
    if (item > 0) {
      positive++;
    } else if (item < 0) {
      negative++;
    } else {
      zero++;
    }
  }
  console.log((positive / arr.length).toFixed(6));
  console.log((negative / arr.length).toFixed(6));
  console.log((zero / arr.length).toFixed(6));
};

plusMinus([1, 1, 0, -1, -1]);
