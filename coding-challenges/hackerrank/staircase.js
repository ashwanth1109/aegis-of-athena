// https://www.hackerrank.com/challenges/staircase/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

const staircase = n => {
  for (let i = 1; i <= n; i++) {
    let tempString = "";
    for (let j = 1; j <= n - i; j++) {
      tempString += " ";
    }
    for (let j = 1; j <= i; j++) {
      tempString += "#";
    }
    console.log(tempString);
  }
};

staircase(6);
