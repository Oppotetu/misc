
// brute force

const bruteSum = (target, numbers) => {

  // basecases
  if (target === 0) return true;
  if (target < 0) return false;

  for (let num of numbers) {
    const remainder = target - num;
    if (bruteSum(remainder, numbers) === true) {
      return true;
    }
  }
}

console.log(bruteSum(7, [2, 3, 4]));

// with memoization

const canSum = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;

  for (let num of numbers) {
    const remainder = target - num;
    if (canSum(remainder, numbers, memo) === true) {
      memo[target] = true;
      return true;
    }
  }

  memo[target] = false;
  return false;
};

console.log(canSum(50, [7, 14, 3, 4, 8]));
console.log(canSum(300, [7, 14]));
console.log(canSum(300, [7, 14, 1]));

