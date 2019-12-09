// https://www.hackerrank.com/challenges/compare-the-triplets/problem?h_r=next-challenge&h_v=zen

const compareTriplets = (strA, strB) => {
  let aScore = 0,
    bScore = 0;
  const arrA = strA.split(" ").map(x => Number(x));
  const arrB = strB.split(" ").map(x => Number(x));
  console.log(arrA, arrB);
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] > arrB[i]) {
      aScore += 1;
    } else if (arrA[i] < arrB[i]) {
      bScore += 1;
    }
  }
  return [aScore, bScore];
};

console.log(compareTriplets("17 28 30", "99 16 8"));
