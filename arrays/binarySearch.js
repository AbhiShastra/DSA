/**
 * Binary Search Algorithm Implementation
 * 
 * @description This function performs binary search on a sorted array
 * @param {number[]} arr - The sorted array to search in
 * @param {number} target - The target value to find
 * @returns {number} - The index of the target element, or -1 if not found
 */
function binarySearch(arr, target) {
  // TODO: Add input validation
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // Using Math.floor to avoid potential integer overflow
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Element not found
}

/**
 * Recursive Binary Search Implementation
 * @param {number[]} arr - The sorted array to search in
 * @param {number} target - The target value to find
 * @param {number} left - Left boundary (optional, defaults to 0)
 * @param {number} right - Right boundary (optional, defaults to arr.length - 1)
 * @returns {number} - The index of the target element, or -1 if not found
 */
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1;
  }

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, right);
  } else {
    return binarySearchRecursive(arr, target, left, mid - 1);
  }
}

// Test cases
console.log("Testing Binary Search:");
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

console.log(`Array: [${sortedArray.join(", ")}]`);
console.log(`Search for 7: ${binarySearch(sortedArray, 7)}`); // Should return 3
console.log(`Search for 15: ${binarySearch(sortedArray, 15)}`); // Should return 7
console.log(`Search for 20: ${binarySearch(sortedArray, 20)}`); // Should return -1

console.log("\nTesting Recursive Binary Search:");
console.log(`Search for 5: ${binarySearchRecursive(sortedArray, 5)}`); // Should return 2
console.log(`Search for 1: ${binarySearchRecursive(sortedArray, 1)}`); // Should return 0
console.log(`Search for 25: ${binarySearchRecursive(sortedArray, 25)}`); // Should return -1

module.exports = { binarySearch, binarySearchRecursive };
