// var sieve = new Array();
// var maxcount = 250;
// var maxsieve = 10000;

// for (var i = 2; i < maxsieve; i++) sieve[i] = 1;

// var primes = [];
// var sum = 0;
// for (var prime = 2; prime < maxsieve && primes.length < maxcount; prime++) {
//   if (!sieve[prime]) continue;
//   primes.push(prime);
//   sum += prime;
//   for (var i = prime * 2; i < maxsieve; i += prime) {
//     sieve[i] = 0; 
//   }
// }

// var result = "primes: " + primes.join(" ") + "\n" + "count: " + primes.length + "\n" + "sum: " + sum + "\n";

// console.log(result);

function getPrimes(max) {
  var sieve = [], i, j, primes = [];
  for (i = 2; i <= max; ++i) {
    if (!sieve[i]) {
      primes.push(i);
      for (j = i * 2; j <= max; j += i) {
        sieve[j] = true;
      }
    }
  }
  return primes;
}

const sum = getPrimes(2000000).filter(x => true).reduce((a, b) => a + b, 0);

console.log(sum);