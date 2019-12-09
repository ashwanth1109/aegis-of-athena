// https://www.codewars.com/kata/remove-the-minimum/train/javascript

// Remove the Minimum
// 7 kyu

removeSmallest = nums => {
    reducer = (acc, val) => (acc < val ? acc : val);
    getIndexOfSmallest = arr =>
        arr.indexOf(arr.length > 0 ? arr.reduce(reducer) : 0);
    removeElementAtId = (arr, id) =>
        arr.slice(0, id).concat(arr.slice(id + 1, arr.length));
    return removeElementAtId(nums, getIndexOfSmallest(nums));
};

arr1 = [1, 2, 3, 4, 5];
arr2 = [5, 3, 2, 1, 4];
// console.log(removeSmallest(arr2));

//===========================================
// COOL SOLUTIONS BY OTHERS
//===========================================
removeSmallest2 = nums => {
    let indexOfMin = nums.indexOf(Math.min(...nums));
    return [...nums.slice(0, indexOfMin), ...nums.slice(indexOfMin + 1)];
};
console.log(removeSmallest2(arr2));
//===========================================
// TAKEAWAYS -
// Using spread operator in combination with Math.min
// Thats a neat thing to do
// Should try to practice using spread/rest operator more
//
// When slice is not provided a second parameter,
// it automatically goes to the end it seems
//===========================================
