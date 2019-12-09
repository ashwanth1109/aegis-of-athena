// https://www.codewars.com/kata/jaden-casing-strings/train/javascript

// Jaden Casing Strings Like This
// 7 kyu

//===========================================
// TAKEAWAY: YOU CAN CREATE PROTOTYPE CLASSES LIKE THESE
// NOTE - YOU CANNOT USE ARROW FUNCTION
//===========================================
String.prototype.testFunc = function() {
    return this.valueOf();
};
str1 = "Hello world";
// console.log(str.testFunc());

//===========================================
// JADEN CASE FUNCTION
//===========================================
String.prototype.toJadenCase = function() {
    capitalizeWord = word => word.charAt(0).toUpperCase() + word.substr(1);
    return this.split(" ")
        .map(capitalizeWord)
        .join(" ");
};
// Test Case
str2 = "How can mirrors be real if our eyes aren't real";
console.log(str2.toJadenCase());
