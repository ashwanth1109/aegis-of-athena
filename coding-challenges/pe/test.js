// let nums = [1, 2, 3, 4, 5];

// let func1 = number => {
//   console.log(number);
// };

// nums.forEach(func1);

//===========================================
//
//===========================================

// const duplicates = a => {
//   let counts = [];
//   for (let i = 0; i <= a.length; i++) {
//     if (counts[a[i]] === undefined) {
//       counts[a[i]] = 1;
//     } else {
//       return true;
//     }
//   }
//   return false;
// };
// const array1 = [`abc`, `def`, `ghi`, `def`, `jkl`, `mno`, `abc`, `def`, `ghi`];

// // console.log(duplicates(array1));
// // console.log(array1);
// // METHOD is of the order (N) and not (N2) as with nested loops

// const hasDuplicates = arr =>
//   arr.some((value, index, array) => array.indexOf(value, index + 1) !== -1);

// console.log(hasDuplicates(array1.some()));
