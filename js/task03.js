'use strict'

{
  const getRandomNumber = (n, m, type) => {
    let randomNumber;

    switch (type) {
      case 'even':
        randomNumber = Math.floor(Math.random() * ((Math.max(n, m) / 2) - (Math.min(n, m) / 2) + 1) + (Math.min(n, m) / 2)) * 2;
        break;
      case 'odd':
        randomNumber = Math.floor(Math.random() * (((Math.max(n, m) + 1) / 2) - ((Math.min(n, m) + 1) / 2) + 1) + ((Math.min(n, m) + 1) / 2)) * 2 - 1;
        break;
      default:
        randomNumber = Math.floor(Math.random() * (Math.max(n, m) - Math.min(n, m) + 1) + Math.min(n, m))
        break;
    }
    return randomNumber
  }

  const getRandomNumberArray = (count, n, m, type) => [...new Array(count)]
    .map(() => getRandomNumber(n, m, type));
  
    console.log(getRandomNumberArray(99, -10, 10));
    console.log(getRandomNumberArray(99, -10, 10, "even"));
    console.log(getRandomNumberArray(99, -10, 10, "odd"));
}