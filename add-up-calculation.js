// Question!
// Suppose we want to write a function that
// calculates the sum of all numbers from 1 up to
// (and including) some number n.

// Using looping solution
function addUpLooping(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log(`Using Loop : ${addUpLooping(10000000)}`);

// Using mathematical formula
function addUpMath(n) {
  return (n * (n + 1)) / 2;
}

console.log(`Using Mathematical : ${addUpMath(10000000)}`);

console.log(); // just the line break

// Test which one solutions is more fasters
var time1 = performance.now();
addUpLooping(10000000);
var time2 = performance.now();
console.log(`Time Elapsed for loop: ${(time2 - time1) / 100} seconds`);

var time1 = performance.now();
addUpMath(10000000);
var time2 = performance.now();
console.log(`Time Elapsed for math: ${(time2 - time1) / 100} seconds`);
