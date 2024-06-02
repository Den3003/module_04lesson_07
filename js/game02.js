'use strict'

{
  const userNumberOne = prompt('Введите первое число', '');
  if (userNumberOne === null) {
    alert('Игра закончилась');
  } else {
    const userNumberTwo = prompt('Введите второе число', '');
    if (userNumberTwo === null) {
      alert('Игра закончилась');
    } else {
      
      const getArrayRange = (n, m) => {
      const arrayRange = [];
        if (n < m) {
          for (n; n <= m; n++) {
            arrayRange.push(+n);
          }
          return arrayRange
        }
        if (n > m) {
          for (m; m <= n; m++) {
            arrayRange.push(+m);
          }
          return arrayRange
        }
      }
      const countAttempts = Math.round(getArrayRange(userNumberOne, userNumberTwo).length * 0.3);
      const hiddenNumber = Math.floor(Math.random() * (+userNumberTwo - +userNumberOne + 1)) + +userNumberOne;

      const arrayPredictNumber = []; 
      do {
        const userPredictNumber = prompt('Угадай число', '');

        if (+userPredictNumber === hiddenNumber) {
          alert('Вы угадали число!');
          break;
        }

        if (userPredictNumber === null) {
          alert('Игра закончилась');
          break;
        }

        if (arrayPredictNumber.includes(+userPredictNumber)) {
          alert('Это число вы уже вводили');
        }

        if (+userPredictNumber !== hiddenNumber && !(arrayPredictNumber.includes(+userPredictNumber))) {
          arrayPredictNumber.push(+userPredictNumber);
        }
      } while (arrayPredictNumber.length < countAttempts)

      if (countAttempts === arrayPredictNumber.length) {
        alert('Попытки закончились!');
      }

    }
  }

}