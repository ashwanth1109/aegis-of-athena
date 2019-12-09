// Given an array of integers, find the sum of its elements.

const simpleArraySum = arr => {
  let sum = 0;
  for (item of arr) {
    sum += item;
  }
  console.log(sum);
};

simpleArraySum([1, 2, 3]);
