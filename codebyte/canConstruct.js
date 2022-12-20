
// brute force

const bruteConstruct = (target, wordBank) => {
  if (target === '') return true;

  for (let i of wordBank) {
    if (target.indexOf(i) === 0) {
      const suffix = target.slice(i.length);
      if (bruteConstruct(suffix, wordBank) === true) {
        return true;
      }
    }
  }

  return false;
}

// console.log(bruteConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // true
// console.log(bruteConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) // false
// console.log(bruteConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) // true
// console.log(bruteConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])) // false

const canConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return true;

  for (let i of wordBank) {
    if (target.indexOf(i) === 0) {
      const suffix = target.slice(i.length);
      if (canConstruct(suffix, wordBank, memo) === true) {
        memo[target] = true;
        return memo[target];
      }
    }
  }

  memo[target] = false;
  return false;
}

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // true
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) // false
console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) // true
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['fe', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])) // false


