// https://afteracademy.com/blog/check-for-pair-in-an-array-with-a-given-sum

// Given an array of n integers and given a number K, determines whether there is a pair of elements
// in the array that sums to exactly K.

/**
 * Mental Map:
 *
 * arr = [1, 2, 3 ... n]
 * K = X
 *
 *
 * Qns:
 *
 * 1. Only have to determine one pair?
 * 2. Do we know anything about the range?
 * 3. Are all numbers positive?
 */

const arr1 = [-40, -5, 1, 3, 6, 7, 8, 20];
const K = 28;
let ans = false;

// Straightforward Solution:
// for (let i = 0; i < arr1.length - 1; i++) {
//   console.log("Outer Iteration", i);
//   for (let j = i + 1; j < arr1.length; j++) {
//     console.log("Inner Iteration", j);
//     if (arr1[i] + arr1[j] === K) {
//       console.log("Match");
//       ans = true;
//     //   break; doesn't help
//     }
//   }
// }

// Optimization 1:
// let i = 0;
// while (i < arr1.length - 1 && ans === false) {
//   console.log("Outer Iteration", i);
//   let j = i + 1;
//   while (j < arr1.length && ans === false) {
//     if (arr1[i] + arr1[j] === K) {
//       console.log("Match");
//       ans = true;
//     }
//     j++;
//   }
//   i++;
// }

// Optimization 2:
const quickSort = arr => {
  if (arr.length > 2) {
    const pivot = arr[0];
    const low = [];
    const high = [];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > pivot) high.push(arr[i]);
      else low.push(arr[i]);
    }
    return [
      ...(low.length > 1 ? quickSort(low) : low),
      pivot,
      ...(high.length > 1 ? quickSort(high) : high)
    ];
  } else {
    if (arr[0] > arr[1]) return [arr[1], arr[0]];
    else return arr;
  }
};

const binarySearch = (arr, elem) => {
  const middleId = Math.floor(arr.length / 2);
  let middle = arr[middleId];
  if (elem === middle) return true;
  else if (arr.length === 1) return false;
  else if (arr.length === 2) return binarySearch([arr[0]], elem);

  if (elem < middle) {
    const low = arr.slice(0, middleId);
    return binarySearch(low, elem);
  } else {
    const high = arr.slice(middleId + 1, arr.length);
    return binarySearch(high, elem);
  }
};

const sortedArr = quickSort(arr1);

let i = 0;
while (i < arr1.length - 1 && ans === false) {
  const elem2 = K - arr1[i++];
  if (binarySearch(arr1.slice(i, arr1.length), elem2)) ans = true;
}

console.log(ans);
