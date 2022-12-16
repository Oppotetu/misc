
// using the sieve of eratosthenes

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