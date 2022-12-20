
// Course developed by Alvin Zablan from Coderbyte //

fibonacci
const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

// console.log(fib(7));
// console.log(fib(50));

// fibonacci

const bruteFib = (n) => {
  if (n <= 2) return 1;

  const result = bruteFib(n - 1) + bruteFib(n - 2);
  return result
}

// console.log(bruteFib(7));
// console.log(bruteFib(9));
// console.log(bruteFib(3));
// console.log(bruteFib(50));

const gridTraveller = (m, n, memo = {}) => {
  const key = m + ',' + n;

  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  memo[key] = gridTraveller(m - 1, n, memo) + gridTraveller(m, n - 1, memo);
  return memo[key];
}

// console.log(gridTraveller(3, 3))
// console.log(gridTraveller(18, 18))

// CAN SUM
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

// console.log(canSum(7, [2, 3]))
// console.log(canSum(7, [5,3,4,7]))
// console.log(canSum(7, [2, 4]))
// console.log(canSum(8, [2, 3, 5]))
// console.log(canSum(300, [7, 14]))

// any (first) combination that sums to sum
const howSum = (target, numbers, memo = {}) => {

  if (target in memo) return memo[target]
  if (target === 0) return [];
  if (target < 0) return null;

  for (let i of numbers) {
    const remainder = target - i
    const result = howSum(remainder, numbers, memo);
    if (result !== null) {
      memo[target] = [...result, i]
      return memo[target];
    }
  }
  memo[target] = null
  return null;
};

// console.log(howSum(7, [2, 3]))
// console.log(howSum(7, [5, 3, 4, 7]))
// console.log(howSum(7, [2, 4]))
// console.log(howSum(8, [2, 3, 5]))
// console.log(howSum(300, [7, 14]))

// best sum 

const bestSum = (target, numbers, memo = {}) => {

  if (target in memo) return memo[target]
  if (target === 0) return []
  if (target < 0) return null

  let shortestCombination = null

  for (let i of numbers) {
    const remainder = target - i
    const niteration = bestSum(remainder, numbers, memo)
    if (niteration !== null) {
      const combination = [...niteration, i]
      if (shortestCombination === null || combination.length < shortestCombination.length) {
        shortestCombination = combination;
      }
    }
  }
  memo[target] = shortestCombination;
  return shortestCombination
}

// console.log(bestSum(7, [5,3,4,7])) // 7
// console.log(bestSum(8, [2,3,5])) // 3,5
// console.log(bestSum(8, [1,4,5])) // 4,4
// console.log(bestSum(100, [1,2,5,25])) // 25,25,25,25

// canConstruct

const canConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target]
  if (target === '') return true

  for (let i of wordBank) {
    if (target.indexOf(i) === 0) {
      const suffix = target.slice(i.length);
      if (canConstruct(suffix, wordBank, memo) === true) {
        memo[target] = true
        return memo[target]
      }
    }
  }
  memo[target] = false
  return memo[target];
};

// console.log(canConstruct('abcdef', ['ab','abc','cd','def','abcd'])) // true
// console.log(canConstruct('skateboard', ['bo','rd','ate','t','ska','sk','boar'])) // false
// console.log(canConstruct('enterapotentpot', ['a','p','ent','enter','ot','o','t'])) // true
// console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
//     'e','ee','eee','eeee','eeeee','eeeeee'])) // false

// countConstruct

const countConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target]
  if (target === '') return 1

  let counter = 0;

  for (let i of wordBank) {
    if (target.indexOf(i) === 0) {
      const numWays = countConstruct(target.slice(i.length), wordBank, memo)
      counter += numWays;
    }
  }
  memo[target] = counter
  return memo[target]
}

// console.log(countConstruct('purple', ['purp','p','ur','le','purpl'])) // 2
// console.log(countConstruct('abcdef', ['ab','abc','cd','def','abcd'])) // 1
// console.log(countConstruct('skateboard', ['bo','rd','ate','t','ska','sk','boar'])) // 0
// console.log(countConstruct('enterapotentpot', ['a','p','ent','enter','ot','o','t'])) // 4
// console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
//     'e','ee','eee','eeee','eeeee','eeeeee'])) // 0

allConstruct

const allConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target]
  if (target === '') return [[]];

  const result = [];

  for (let i of wordBank) {
    if (target.indexOf(i) === 0) {
      const suffix = target.slice(i.length);
      const suffixWays = allConstruct(suffix, wordBank, memo);
      const targetWays = suffixWays.map(way => [i, ...way]);
      result.push(...targetWays);
    }
  }
  memo[target] = result;
  return result;
};

// console.log(allConstruct('hello', ['cat', 'dog', 'mouse'])) // 7
// console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])) // 2
// console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])) // 4
// console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) // -
// console.log(allConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) //
// console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
//   'e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])) // 

