
// brute force

const bruteSum = (target, numbers) => {
  if (target === 0) return [];
  if (target < 0) return null;

  for (let i of numbers) {
    const remainder = target - i
    const result = bruteSum(remainder, numbers);
    if (result !== null) {
      // result = [...result, i]
      result.push(i);
      return result;
    }
  }

  return null;
}

// console.log(bruteSum(7, [2,3]));
// console.log(bruteSum(7, [5,3,4,7]));

// with memoization

const howSum = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  for (let i of numbers) {
    const remainder = target - i;
    const result = howSum(remainder, numbers, memo);
    if (result !== null) {
      memo[target] = [...result, i];
      return memo[target];
    }
  }

  memo[target] = null;
  return null;
}

console.log(howSum(7, [2,3]));
// console.log(howSum(7, [5,3,4,7]));
// console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14]))
