

function smallestMultiple() {
  var count = 0;

  for (i = 50;; i++) {
    count = 0;
    for (j = 1; j <= 20; j++) {
      if (i % j != 0) {
        break;
      } else {
        count += 1;
      }
      if (count == 20) return i;
    } 
  }
}

console.log(smallestMultiple());