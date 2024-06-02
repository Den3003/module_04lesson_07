'use strict'

{
  const generatorArray = (count, n, m, str) => {
    const arrayRandomNumbers = [];
    for (let i = 0; i < count; i++) {
      if (m > n) {
        arrayRandomNumbers.push(Math.floor(Math.random() * (m - n + 1)) + n);
      }
      if (m < n) {
        arrayRandomNumbers.push(Math.floor(Math.random() * (n - m + 1)) + m);
      }
    }
    if (str === 'even') {
      return arrayRandomNumbers.filter((item) => item % 2 === 0 && item !== 0);
    }
    if (str === 'odd') {
      return arrayRandomNumbers.filter((item) => item % 2 !== 0);
    }
    return arrayRandomNumbers;
  }
  
  console.log(generatorArray(10, 1, 20, 'even'));
}