// Given five positive integers,
// find the minimum and maximum values that can be
// calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values
// as a single line of two space-separated long integers.

const minMaxSum = arr => {
  let min, max;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      if (j !== i) {
        sum += arr[j];
      }
    }
    if (min === undefined) {
      min = sum;
    } else if (min > sum) {
      min = sum;
    }
    if (max === undefined) {
      max = sum;
    } else if (max < sum) {
      max = sum;
    }
  }
  console.log(`${min} ${max}`);
};

minMaxSum([1, 2, 3, 4, 5]);
