
// brute force

const bruteFib = (n) => {
  if (n <= 2) return 1; 

  let result  = bruteFib(n - 2) + bruteFib(n - 1);
}

// with memoization

const recursiveFib = (n, memo = {}) => {

  if (n in memo) return memo[n];
  if (n <= 2) return 1;

  memo[n] = recursiveFib(n - 2, memo) + recursiveFib(n - 1, memo);
  return memo[n];
}

console.log(recursiveFib(7));