'use strict'

function getRandomNumberArray(count, n, m, type) {
  const rules = ['even', 'odd'].indexOf(type);
  const max = Math.max(n, m) + -1 * +(rules !== -1);
  const min = Math.min(n, m);
  const result = [];

  for (let i = 0; i < count; i++) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    if (rules !== -1 && Math.abs(randomNumber % 2) !== rules) {
      randomNumber++;
    }

    result.push(randomNumber);
  }

  return result
}

console.log(getRandomNumberArray(120, -10, 50)); 
console.log(getRandomNumberArray(99, -10, 10, "even"));
console.log(getRandomNumberArray(120, -10, 15, "odd"));





// function getRandomNumber(n, m, type) {
//   let randomNumber = Math.floor(Math.random() * (Math.max(n, m) - Math.min(n, m) + 1)) + Math.min(n, m);

//   if (type === "even" && randomNumber % 2 !== 0) {
//       randomNumber++; 
//   } else if (type === "odd" && randomNumber % 2 === 0) {
//       randomNumber++; 
//   }

//   return randomNumber;
// }

// function getRandomNumberArray(count, n, m, type) {
//   return [...new Array(count)].map(() => getRandomNumber(n, m, type));
// }

// console.log(getRandomNumberArray(120, -10, 50)); 
// console.log(getRandomNumberArray(99, -10, 10, "even"));
// console.log(getRandomNumberArray(120, -10, 15, "odd"));
