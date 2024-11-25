// Helper function to check if two arrays are equal
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false; // Arrays have different lengths, so they are not equal
  }
  
  // Compare each element in both arrays
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; // Arrays have different elements at the same index
    }
  }
  
  return true; // Arrays are equal
};

// Main function to assert arrays are equal
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    // If arrays are equal
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    // If arrays are not equal
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

// TEST CASES

// Test cases for assertArraysEqual
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Should print success message
assertArraysEqual([1, 2, 3], [3, 2, 1]); // Should print failure message
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // Should print success message
assertArraysEqual([1, 2, 3], [1, 2, 4]); // Should print failure message