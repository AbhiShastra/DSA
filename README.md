# DSA (Data Structures and Algorithms)

## Overview
This repository is a collection of Data Structures and Algorithms (DSA) practice problems and solutions written in JavaScript. It aims to help developers enhance their problem-solving skills and understanding of fundamental concepts in DSA.

## Features
- Solutions to common DSA problems.
- Implementations of various data structures (e.g., arrays, linked lists, stacks, queues, trees, graphs, etc.).
- Algorithm implementations (e.g., sorting, searching, dynamic programming, etc.).
- Beginner-friendly code with detailed comments.
- Comprehensive test suites for all algorithms
- Automated code review and CI/CD workflows

## Algorithms Implemented

### Arrays
- **Binary Search** (`arrays/binarySearch.js`)
  - Time Complexity: O(log n)
  - Space Complexity: O(1) for iterative, O(log n) for recursive
  - Both iterative and recursive implementations
  - Comprehensive test coverage
- **Find Min/Max** (`arrays/findMinMax.js`)
- **Kth Maximum/Minimum** (`arrays/kthMaxMin.js`)
- **Array Reversal** (`arrays/reverseArrayUsingSwipe.js`)
- **Union and Intersection** (`arrays/unionIntersection.js`)
- **Cyclic Rotation** (`arrays/cyclicRotate.js`)
- **Sort by Frequency** (`arrays/sortArrayWithFrequencies.js`)

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/DSA.git
cd DSA

# Install dependencies (for testing)
npm install
```

### Running Tests
```bash
# Run all tests
npm test

# Run specific test file
npm test arrays/binarySearch.test.js
```

### Running Individual Algorithms
```bash
# Run binary search example
node arrays/binarySearch.js
```

## Contributing

### Pull Request Process
1. Create a feature branch from `main`
2. Implement your algorithm with proper documentation
3. Add comprehensive test cases
4. Ensure all tests pass and code follows style guidelines
5. Submit a pull request using the provided template

### Code Review Requirements
- All PRs require review from code owners
- Automated checks must pass (linting, testing, performance)
- Algorithm complexity must be documented
- Test coverage should be comprehensive

Happy coding!

