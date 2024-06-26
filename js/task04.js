'use strict'

  const getArrayLeapYears = (n, m) => {
    const max = Math.max(n, m);
    let min = Math.min(n, m);
    const arrayLeapYears = [];

    for (min; min < max; min++) { // здесь я изменяю min
      if (min % 4 === 0 && min % 100 !== 0 || min % 400 === 0) {
        arrayLeapYears.push(min);
      }
    }

    return arrayLeapYears;
  }  

  console.log(getArrayLeapYears(2002, 1899));
