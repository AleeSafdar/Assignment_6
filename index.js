// Q1=Write a function that takes two numbers as an argument and returns their sum

function add(val1, val2) {
  console.log(val1 + val2)
}

add(1, 199);
add(1, 99);
add(9, 90);

//Q2=Write a function that takes a number as an argument and return true if num is even , and false if its odd
function isEven(num) {
  return num % 2 === 0;
}

function isOdd(num) {
  return num % 2 !== 0;
}

// Example usage:
let num1 = 10;
let num2 = 7;

console.log(num1 + ' is even? ' + isEven(num1)); // Output: 10 is even? true
console.log(num1 + ' is odd? ' + isOdd(num1)); // Output: 10 is odd? false
console.log(num2 + ' is even? ' + isEven(num2)); // Output: 7 is even? false
console.log(num2 + ' is odd? ' + isOdd(num2)); // Output: 7 is odd? true


