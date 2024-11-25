 // FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  // If the lengths of the arrays are different, return false
  if (actual.length !== expected.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    return;
  }

  // Compare each element
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
      return;
    }
  }

  // If all elements are equal
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

// tail function
const tail = function(arr) {
  return arr.slice(1);
};

// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]); // should return ["Lighthouse", "Labs"]
assertEqual(result, ["Lighthouse", "Labs"]); // now it should pass
