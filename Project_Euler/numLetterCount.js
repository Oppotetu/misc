
// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

const addSingles = (n) => n += 36;

const numLetterCount = (upper) => {

  var sum = 0;
  if (upper == 9) {
    addSingles(sum);
    return sum;
  }
  for (let i = 10; i <= upper; i++) {
    var digits = ("" + i).split("").map(x => parseInt(x, 10));


    if (digits.length == 2) {
      
    }
    if (digits.length == 3) {
      console.log('number has 3 digits');
    }
    if (digits.length == 4) {
      console.log('number has 4 digits');
    }


    // if (('' + i).split[0] == '1') {
    //   console.log('one');
    // }
  }
  return digits;
}

console.log(numLetterCount(12));