

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

function findTriangleNumbers(n) {
  return (n * (n + 1)) / 2;
}

function findMaxFactors(maxFactors) {

  var nextTriangleNum;
  var s;
  for (i = 2;; i++) {
    var factors = [];
    nextTriangleNum = findTriangleNumbers(i);
    s = Math.pow(nextTriangleNum, 0.5);
    s = Math.floor(s);
    for (j = 1; j <= s; j++) {
      if (nextTriangleNum % j == 0) {
        var quotient = nextTriangleNum / j;
        factors.push(j);
        factors.push(quotient);
      }
    }
    factors.push(nextTriangleNum);
    let uFactors = [...new Set(factors)]
    // factors[factors.length] = nextTriangleNum;
    if (uFactors.length > maxFactors) {
      var result = "The triangle number " + nextTriangleNum + " has " + uFactors.length + " factors: " + "\n" + uFactors.join(" ");
      return result; 
    }
  }
}

console.log(findMaxFactors(5));
console.log(findMaxFactors(7));
console.log(findMaxFactors(10));
console.log(findMaxFactors(500));
