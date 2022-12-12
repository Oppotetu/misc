

function powerDigitSum(num, power) {

  var result = BigInt(Math.pow(num, power))

  const sum = ("" + result)
    .split("")
    .map(x => parseInt(x, 10))
    .reduce((a, b) => a + b, 0);
    
  // var digits = ("" + newer).split("");
  // var ints = digits.map(function (x) {
  //   return parseInt(x, 10);
  // })
  // const sum = ints.reduce((partialSum, a) => partialSum + a, 0);

  return sum;
}

console.log(powerDigitSum(2, 1000));