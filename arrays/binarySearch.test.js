const { binarySearch, binarySearchRecursive } = require("./binarySearch");

describe("Binary Search Tests", () => {
  const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

  describe("Iterative Binary Search", () => {
    test("should find element in the middle", () => {
      expect(binarySearch(sortedArray, 9)).toBe(4);
    });

    test("should find first element", () => {
      expect(binarySearch(sortedArray, 1)).toBe(0);
    });

    test("should find last element", () => {
      expect(binarySearch(sortedArray, 19)).toBe(9);
    });

    test("should return -1 for element not in array", () => {
      expect(binarySearch(sortedArray, 4)).toBe(-1);
      expect(binarySearch(sortedArray, 0)).toBe(-1);
      expect(binarySearch(sortedArray, 25)).toBe(-1);
    });

    test("should handle empty array", () => {
      expect(binarySearch([], 5)).toBe(-1);
    });

    test("should handle single element array", () => {
      expect(binarySearch([5], 5)).toBe(0);
      expect(binarySearch([5], 3)).toBe(-1);
    });
  });

  describe("Recursive Binary Search", () => {
    test("should find element in the middle", () => {
      expect(binarySearchRecursive(sortedArray, 9)).toBe(4);
    });

    test("should find first element", () => {
      expect(binarySearchRecursive(sortedArray, 1)).toBe(0);
    });

    test("should find last element", () => {
      expect(binarySearchRecursive(sortedArray, 19)).toBe(9);
    });

    test("should return -1 for element not in array", () => {
      expect(binarySearchRecursive(sortedArray, 4)).toBe(-1);
      expect(binarySearchRecursive(sortedArray, 0)).toBe(-1);
      expect(binarySearchRecursive(sortedArray, 25)).toBe(-1);
    });

    test("should handle empty array", () => {
      expect(binarySearchRecursive([], 5)).toBe(-1);
    });

    test("should handle single element array", () => {
      expect(binarySearchRecursive([5], 5)).toBe(0);
      expect(binarySearchRecursive([5], 3)).toBe(-1);
    });
  });
});

// Performance comparison test (commented out for regular test runs)
/*
describe('Performance Tests', () => {
    const largeArray = Array.from({length: 1000000}, (_, i) => i * 2);
    
    test('iterative vs recursive performance', () => {
        const target = 999998;
        
        const iterativeStart = performance.now();
        binarySearch(largeArray, target);
        const iterativeEnd = performance.now();
        
        const recursiveStart = performance.now();
        binarySearchRecursive(largeArray, target);
        const recursiveEnd = performance.now();
        
        console.log(`Iterative: ${iterativeEnd - iterativeStart}ms`);
        console.log(`Recursive: ${recursiveEnd - recursiveStart}ms`);
    });
});
*/
