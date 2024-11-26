const countOnly = function(allItems, itemsToCount) {
  let results = {};  

  for (const item of allItems) {
    // Check if this item should be counted based on the itemsToCount object
    if (itemsToCount[item]) {
      if (results[item]) {
        // If the item already exists in the results object, increment the count
        results[item] += 1;
      } else {
        // Otherwise, initialize the count to 1
        results[item] = 1;
      }
    }
  }
  return results; 
};

// Test case: count fruits
const fruits = [
  "apple", "banana", "orange", "apple", "grape", "banana", "apple"
];

// Call the countOnly function
const result = countOnly(fruits, {
  apple: true,
  banana: true,
  orange: false,
  grape: true
});

// Print the final result
console.log(result);
