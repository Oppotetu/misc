
// the task is: Which starting number, under one million, produces the longest chain?
// i thought this code would work but it doesnt. do you have any suggestions?

f = num => {
  if (num % 2 == 0) {
    num = num / 2;
  } else {
    num = 3 * num + 1;
  }
  return num;
}

function longestCollatzSequence(n) {
  var greatestChain = 0;
  var startingNum = 0;
  for (var i = n - 1; i >= 1; i--) {
    var j = i;
    var currentChain = 1;
    while (j !== 1) {
      j = f(j);
      currentChain += 1; 
    }
    if (currentChain > greatestChain) {
      startingNum = i;
      greatestChain = currentChain;
    } 
  }
  return startingNum;
}

console.log(longestCollatzSequence(1000000));

