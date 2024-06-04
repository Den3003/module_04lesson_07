'use strict'

{

  const getArrayRandomNumbers = (count, n, m) => [...new Array(count)]
  .map(() => Math.floor(Math.random() * (Math.max(n, m) - Math.min(n, m) + 1) + Math.min(n, m)))
  
  console.log(getArrayRandomNumbers(99, -10, 10));

}