// Create function to calculate number from up and down direction based on the input value

function countUpAndDown(n) {
  console.log("Going up!");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }

  console.log("At the top!\nGoing down...");

  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }

  console.log("Back down.");
}

console.log(countUpAndDown(3));

// Nested Loop methods
function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

console.log(printAllPairs(5));

// Using log methods
function logAtLeast5(n) {
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

console.log(logAtLeast5(5));
