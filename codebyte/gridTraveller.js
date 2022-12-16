
// brute force

const bruteTraveller = (m, n) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  let result = bruteTraveller(m - 1, n) + bruteTraveller(n - 1, m);
  return result;
}

console.log(bruteTraveller(2, 2));

// with memoization

const gridTraveller = (m, n, memo = {}) => {
  let key = `${m},${n}`;

  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  memo[key] = gridTraveller(m - 1, n, memo) + gridTraveller(m, n - 1, memo);
  return memo[key];
}

console.log(gridTraveller(3, 3));
console.log(gridTraveller(4, 4));
console.log(gridTraveller(21, 21));