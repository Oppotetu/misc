
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
      var result = `The triangle number ${nextTriangleNum} has ${uFactors.length} \nand factors ${uFactors.join(" ")}.` 
      return result; 
    }
  }
}

console.log(findMaxFactors(5));
console.log(findMaxFactors(7));
console.log(findMaxFactors(10));
// console.log(findMaxFactors(500));
