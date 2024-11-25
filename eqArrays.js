// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const eqArrays = function(arr1,arr2){
if(arr1.length !== arr2.length) {return false}
for(let i =0;i<arr1.length;i++){
 if(arr1[i]!==arr2[i]){
    return false
 }
}
return true
}
// TEST CASES for eqArrays function

// These should return true because the arrays are identical
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

// These should return false because the arrays have the same elements but in different order
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should FAIL

// These should return true because both arrays have identical string elements
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS

// These should return false because the elements in the arrays are of different types (string vs. number)
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should FAIL