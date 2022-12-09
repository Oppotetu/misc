function findTriangleNumbers(num) {
  return (num * (num + 1)) / 2;
}

// function factorTriangleNumbers() {
//   var factors = [];
//   for (const i of findTriangleNumbers(20)) {
//     for (j = 1; j <= i; j++) {
//       if (i % j == 0) factors.push(j);
//     }
//     // console.log(i, factors);
//     if (factors.length > 500) return i;
//     factors = [];
//   }

//   var fail = "fail";
//   return fail;
// }

// console.log(factorTriangleNumbers())

function findMaxFactors(maxFactors) {
  var factors = [];
  var triNum = 0;
  var addCounter = 1;

  
  while (factors.length <= maxFactors) {
    triNum += addCounter;
    addCounter += 1;
    for (i = 1; i <= triNum; i++) {
      if (triNum % i == 0) factors.push(i);
    }
    if (factors.length >= maxFactors) {
      var result = "The triangle number " + triNum + " has " + factors.length + " factors: " + "\n" + factors.join(" ");
      return result; 
    }
    factors = [];
  }
}

console.log(findMaxFactors(5));
console.log(findMaxFactors(7));
console.log(findMaxFactors(10));
console.log(findMaxFactors(200));
