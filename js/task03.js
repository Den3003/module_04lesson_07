'use strict'

function getRandomNumber(n, m, type) {
  let randomNumber = Math.floor(Math.random() * (Math.max(n, m) - Math.min(n, m) + 1)) + Math.min(n, m);

  if (type === "even" && randomNumber % 2 !== 0) {
      randomNumber++; 
  } else if (type === "odd" && randomNumber % 2 === 0) {
      randomNumber++; 
  }

  return randomNumber;
}

function getRandomNumberArray(count, n, m, type) {
  return [...new Array(count)].map(() => getRandomNumber(n, m, type));
}

console.log(getRandomNumberArray(99, -10, 10)); 
console.log(getRandomNumberArray(99, -10, 10, "even"));
console.log(getRandomNumberArray(99, -10, 10, "odd"));
