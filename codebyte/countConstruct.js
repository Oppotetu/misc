
// brute force

const bruteConstruct = (target, wordbank) => {
  
  if (target === '') return 1;
  let counter = 0; 

  for (let i of wordbank) {
    if (target.indexOf(i) === 0) {
      const numWays = bruteConstruct(target.slice(i.length), wordbank)
      counter += numWays;
    }
  }

  return counter;
}

// console.log(bruteConstruct('purple', ['purp','p','ur','le','purpl'])) // 2
// console.log(bruteConstruct('abcdef', ['ab','abc','cd','def','abcd'])) // 1
// console.log(bruteConstruct('skateboard', ['bo','rd','ate','t','ska','sk','boar'])) // 0
// console.log(bruteConstruct('enterapotentpot', ['a','p','ent','enter','ot','o','t'])) // 4
// console.log(bruteConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e','ee','eee','eeee','eeeee','eeeeee'])) // 0

// with memoization

const canConstruct = (target, wordbank, memo = {}) => {
  
  if (target in memo) return memo[target];
  if (target === '') return 1;
  let counter = 0; 

  for (let i of wordbank) {
    if (target.indexOf(i) === 0) {
      const numWays = canConstruct(target.slice(i.length), wordbank, memo)
      counter += numWays;
    }
  }

  memo[target] = counter;
  return memo[target];
}

console.log(canConstruct('purple', ['purp','p','ur','le','purpl'])) // 2
console.log(canConstruct('abcdef', ['ab','abc','cd','def','abcd'])) // 1
console.log(canConstruct('skateboard', ['bo','rd','ate','t','ska','sk','boar'])) // 0
console.log(canConstruct('enterapotentpot', ['a','p','ent','enter','ot','o','t'])) // 4
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['fe','ee','eee','eeee','eeeee','eeeeee'])) // 0