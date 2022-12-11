
function pythagoreanTriplet(sum) {
  var a;
  for (a = 1; a <= 400; a++) {
    var b;
    for (b = a + 1; b <= a + 200; b++) {
      let apow = Math.pow(a, 2);
      let bpow = Math.pow(b, 2);
      let c = apow + bpow;
      let croot = Math.sqrt(c);
      if (!Number.isInteger(croot)) continue
      if (a + b + croot == sum) {
        let summ = a + b + croot;
        let product = a * b * croot;
        var res = "a = " + a + " b = " + b + " c = " + croot + "\n" + "sum: " + summ + "\n" + "product = " + product;
        return res;
      };
    }
  }
  return "not found";
}

console.log(pythagoreanTriplet(1000));