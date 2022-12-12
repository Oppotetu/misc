
function pythagoreanTriplet(sum) {
  var a;
  for (a = 1; a <= Math.floor(sum / 2); a++) {
    var b;
    for (b = a + 1; b <= a + Math.floor(sum / 3); b++) {
      let cpow = Math.pow(a, 2) + Math.pow(b, 2);
      let c = Math.sqrt(cpow);
      if (!Number.isInteger(c)) continue
      if (a + b + c == sum) {
        let sumCheck = a + b + c;
        let product = a * b * c;
        var res = `a = ${a}, b = ${b}, c = ${c}\nsum: ${sumCheck}\nproduct = ${product}`
        return res;
      };
    }
  }
  return "not found";
}

console.log(pythagoreanTriplet(1000));