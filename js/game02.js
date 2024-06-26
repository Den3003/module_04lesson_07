'use strict'

let min, max;
const interval = [];

while (interval.length < 2 && interval[interval.length - 1] !== null) {
  const answer = prompt(`Введите ${!interval.length ? "первое" : "второе"} число`, '');

  if (answer === null) {
    alert('Игра прервана')
  }

  if (Number.isNaN(+answer) || answer.trim() === '') {
    alert('Введите число!')
  }

  if (!Number.isNaN(+answer) && answer.trim() !== '' && !interval.includes(answer)) {
    interval.push(answer);
  }

}

[min, max] = interval.sort((a, b) => +a > +b ? 1 : -1);

if (min !== null && max !== null) {
  const userAttempts = Math.round((max - min) * 0.3);
  const hiddenNumber = Math.floor(Math.random() * (+max - +min + 1)) + +min;
  console.log('hiddenNumber: ', hiddenNumber);
  let continueLoopQuestionnaire = true;
  const arrayPredictNumber = []; 
  let userPredictNumber;

  while (continueLoopQuestionnaire) {
    userPredictNumber = prompt(`Введите число от ${min} до ${max}, у вас ${userAttempts} попытки`, '');
  
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
  
      case userPredictNumber > max:
      case userPredictNumber < min:
        alert(`Число ${userPredictNumber} не входит в диапазон чисел от ${min} до ${max}`);
        break;
  
      case userPredictNumber > hiddenNumber:
        arrayPredictNumber.push(+userPredictNumber);
        alert(`Загаданное число меньше ${userPredictNumber} !`);
        if (arrayPredictNumber.length === userAttempts) {
          continueLoopQuestionnaire = false;
          alert('Попытки закончились');
        }
        break;
  
      case userPredictNumber < hiddenNumber:
        arrayPredictNumber.push(+userPredictNumber);
        alert(`Загаданное число больше ${userPredictNumber} !`);
        if (arrayPredictNumber.length === userAttempts) {
          continueLoopQuestionnaire = false;
          alert('Попытки закончились');
        }
        break;
        
      default:
        continueLoopQuestionnaire = false;
        alert(`Вы угадали это число ${hiddenNumber}`);
        break;   
    }
  }

}