'use strict'

{
  const getArrayRandomNumbers = count => {
    const arrayRandomNumbers = [];
    for (let i = 0; i < count; i++) {
      arrayRandomNumbers.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
    }
    return arrayRandomNumbers
  }
  console.log(getArrayRandomNumbers(5));
}