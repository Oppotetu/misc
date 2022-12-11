

function powerDigitSum(num, power) {
  var n = num;
  var p = power;
  var np = Math.pow(n, p);
  var newer = BigInt(np)
  var digits = ("" + newer).split("");
  var ints = digits.map(function (x) {
    return parseInt(x, 10);
  })
  const sum = ints.reduce((partialSum, a) => partialSum + a, 0);

  return sum;
}

console.log(powerDigitSum(2, 1000));