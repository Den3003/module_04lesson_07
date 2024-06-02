'use strict'

{
  const hiddenNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  
  do {
    let userNumber = prompt('Введите число от 1 до 100', '');

    if (userNumber === null) {
      alert('Игра закончилась');
      break;
    }
    if (Number.isNaN(+userNumber)) {
      alert('Введите число');
    }
    if (userNumber > hiddenNumber) {
      alert('Меньше!');
    }
    if (userNumber < hiddenNumber) {
      alert('Больше!');
    }
    if (+userNumber === hiddenNumber) {
      alert('Правильно!');
      break;
    }
  } while (true)

}