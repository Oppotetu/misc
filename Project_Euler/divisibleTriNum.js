function findTriangleNumbers(num) {
  var triangleNumbers = [];
  var addCounter = 1;

  for (let i = 1; i <= num; i++) {
    var triNum = 0;
    while (addCounter <= i) {
      triNum += addCounter;
      addCounter += 1;
    }
    triangleNumbers.push(triNum);
    addCounter = 0;
  }
  return triangleNumbers;
}

function factorTriangleNumbers() {
  var factors = [];
  for (const i of findTriangleNumbers(5000)) {
    for (j = 1; j <= i; j++) {
      if (i % j == 0) factors.push(j);
    }
    // console.log(i, factors);
    if (factors.length > 500) return i;
    factors = [];
  }

  var fail = "fail";
  return fail;
}

console.log(factorTriangleNumbers())

