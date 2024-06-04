'use strict'

{
  const getArrayRandomNumbers = count => [...new Array(count)]
  .map(() => Math.floor(Math.random() * 100) + 1)
  
  console.log(getArrayRandomNumbers(100));
}