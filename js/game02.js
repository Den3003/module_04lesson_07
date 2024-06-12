'use strict'

let userNumberOne;
let userNumberTwo;
let continueLoop = true;
let continueLoopQuestionnaire = false;

while (continueLoop) {
  if (userNumberOne === undefined || Number.isNaN(+userNumberOne) || userNumberOne.trim() === '') {
  userNumberOne = prompt('Введите первое число', '');

  if (userNumberOne === null) {
      alert("Отменено. Игра остановлена.");
      continueLoop = false;
      continue;  
  }
  if (Number.isNaN(+userNumberOne) || userNumberOne.trim() === '') {
    alert('Введите число!');
    continue;
  }
}
  userNumberTwo = prompt('Введите второе число', '');
    
  if (userNumberTwo === null) {
      alert("Отменено. Игра остановлена.");
      continueLoop = false;
      continue;
  }
  if (Number.isNaN(+userNumberTwo) || userNumberTwo.trim() === '') {
    alert('Введите число!');
    continue;
  }

  continueLoop = false;
  continueLoopQuestionnaire = true;
}

const userAttempts = Math.round((Math.max(userNumberOne, userNumberTwo) - Math.min(userNumberOne, userNumberTwo)) * 0.3);
const hiddenNumber = Math.floor(Math.random() * (Math.max(userNumberOne, userNumberTwo) - Math.min(userNumberOne, userNumberTwo) + 1))
+ Math.min(userNumberOne, userNumberTwo);
const arrayPredictNumber = []; 
let userPredictNumber;

while (continueLoopQuestionnaire && !(userPredictNumber === null) && !(arrayPredictNumber.length === userAttempts) && !(+userPredictNumber === hiddenNumber)) {
  userPredictNumber = prompt(`Введите число от ${Math.min(userNumberOne, userNumberTwo)} до ${Math.max(userNumberOne, userNumberTwo)}, у вас ${userAttempts} попытки`, '');

  switch (true) {
    case userPredictNumber === null:
      alert('Игра закончилась');
      continueLoopQuestionnaire = false;
      break;

    case Number.isNaN(+userPredictNumber):
    case userPredictNumber.trim() === '':
      alert('Введите число!');
      break;

    case arrayPredictNumber.includes(+userPredictNumber):
      alert('Это число вы уже вводили');
      break;

    case userPredictNumber > Math.max(userNumberOne, userNumberTwo):
    case userPredictNumber < Math.min(userNumberOne, userNumberTwo):
      alert(`Число ${userPredictNumber} не входит в диапазон чисел от ${Math.min(userNumberOne, userNumberTwo)}
        до ${Math.max(userNumberOne, userNumberTwo)}`);
      break;

    case userPredictNumber > hiddenNumber && !(arrayPredictNumber.includes(+userPredictNumber)):
      arrayPredictNumber.push(+userPredictNumber);
      alert(`Загаданное число меньше ${userPredictNumber}!`);
      if (arrayPredictNumber.length === userAttempts) {
        alert('Попытки закончились');
      }
      break;

    case userPredictNumber < hiddenNumber && !(arrayPredictNumber.includes(+userPredictNumber)):
      arrayPredictNumber.push(+userPredictNumber);
      alert(`Загаданное число больше ${userPredictNumber}!`);
      if (arrayPredictNumber.length === userAttempts) {
        alert('Попытки закончились');
      }
      break;
      
    default:
      alert(`Вы угадали это число ${hiddenNumber}`);
      break;   
  }
}

