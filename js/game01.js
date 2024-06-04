'use strict'

{
  const hiddenNumber = Math.floor(Math.random() * 100) + 1;

  let userNumber; 

  do {
    userNumber = prompt('Введите число от 1 до 100', '');

    switch (true) {
      case userNumber < 1: 
      case userNumber > 100:
        break;
      case Number.isNaN(+userNumber):
        alert('Введите число!');
        break;
      case userNumber > hiddenNumber:
        alert('Меньше!');
        break;
      case userNumber < hiddenNumber:
        alert('Больше!');
        break;
      case +userNumber === hiddenNumber:
        alert('Правильно!');
        break;       
    }
  } while (!(userNumber === null) && !(+userNumber === hiddenNumber))

  alert('Игра закончилась'); 
}