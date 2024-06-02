'use strict'

{
  const getArrayLeapYears = (n, m) => {
    const arrayLeapYears = [];
    if (n < m) {
      for (n; n < m; n++) {
        if (n % 4 === 0 && n % 100 !== 0 || n % 400 === 0) {
          arrayLeapYears.push(n);
        }
      }
    }
    if (n > m) {
      for (m; m < n; m++) {
        if (m % 4 === 0 && m % 100 !== 0 || m % 400 === 0) {
          arrayLeapYears.push(m);
        }
      }
    }
    return arrayLeapYears
  }
  console.log(getArrayLeapYears(2002, 1899));
}