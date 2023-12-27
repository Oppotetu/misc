
function factorial(n) {
  if (n < 0) return -1;
  else if (n == 0) return 1;
  else {
    return (n * factorial(n - 1));
  }
}

const factorialDigitSum = (n) => {

  var num = BigInt(factorial(n));
  let strin = ('' + num);
  let arr = strin.split('');
  let ints = arr.map(x => parseInt(x, 10));
  let summ = ints.reduce((a, b) => (a + b), 0);

  var sum = ('' + BigInt(factorial(n))).split('').map(x => parseInt(x, 10)).reduce((a, b) => a + b);

  return summ;
}

console.log(factorialDigitSum(101));
