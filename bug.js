function foo(a, b) {
  if (a === null || b === null) {
    return null; // Incorrect handling of null values
  }
  return a + b; // Missing type checking
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // null
console.log(foo('1', 2)); // '12'
console.log(foo(1, '2')); // '12'