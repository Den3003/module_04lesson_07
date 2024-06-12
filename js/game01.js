'use strict'

{
  const hiddenNumber = Math.floor(Math.random() * 100) + 1;
  console.log('hiddenNumber: ', hiddenNumber);

  let userNumber; 

  do {
    userNumber = prompt('Введите число от 1 до 100', '');

    switch (true) {
      case userNumber === null:
        alert('Игра закончилась'); 
        break;
      case Number.isNaN(+userNumber):
      case userNumber.trim() === '':
      case userNumber < 1: 
      case userNumber > 100:
        alert('Введите число!');
        break;      
      case userNumber > hiddenNumber:
        alert(`Загаданное число меньше чем число ${userNumber} !`);
        break;
      case userNumber < hiddenNumber:
        alert(`Загаданное число больше чем число ${userNumber} !`);
        break;
      default:
        alert(`Правильно это число ${userNumber} !`);
        break;       
    }
  } while (!(userNumber === null) && !(+userNumber === hiddenNumber))
}