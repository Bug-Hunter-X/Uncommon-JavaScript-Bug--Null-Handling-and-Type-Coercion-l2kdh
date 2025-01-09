function foo(a, b) {
  // Check if both arguments are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    return null; // Return null for invalid input types
  }

  if (a === null || b === null) {
    return null; // Handle null values explicitly
  }

  return a + b; 
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // null
console.log(foo('1', 2)); // null
console.log(foo(1, '2')); // null