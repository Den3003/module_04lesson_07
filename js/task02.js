'use strict'

{
  const getArrayRandomNumbers = (count, n, m) => {
    const arrayRandomNumbers = [];
    for (let i = 0; i < count; i++) {
      if (m > n) {
        arrayRandomNumbers.push(Math.floor(Math.random() * (m - n + 1)) + n);
      }
      if (m < n) {
        arrayRandomNumbers.push(Math.floor(Math.random() * (n - m + 1)) + m);
      }
    }
    return arrayRandomNumbers
  }
  console.log(getArrayRandomNumbers(5, -2, 1));
}