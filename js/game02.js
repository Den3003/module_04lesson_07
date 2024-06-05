'use strict'

{

  let userNumberOne;
  let userNumberTwo;
  let finishRound = true;


  do {
    userNumberOne = prompt('Введите первое число', '');
    userNumberTwo = prompt('Введите второе число', '');
    
    switch (true) {
      case userNumberOne === null:
      case userNumberTwo === null:
        alert('Вы передумали играть, игра закончилась');
        break;
      case Number.isNaN(+userNumberOne) || userNumberOne === '':
      case Number.isNaN(+userNumberTwo) || userNumberTwo === '':
        alert('Введите число!');
        break;
      case +userNumberOne === +userNumberTwo:
        alert(`Вы ввели одинаковые числа ${userNumberOne} и ${userNumberTwo}, не возможно создать диапазон чисел`);
        break;
      default:

        const getArrayRange = (n, m) => {
          let min = Math.min(n, m);
          let max = Math.max(n, m);
          const arrayRange = [];
          for (min; min < max; min++) {
            arrayRange.push(Math.floor(Math.random() * (max - min + 1)) + min);
          }
          return arrayRange;  
        }
        
        let attempts = Math.round(getArrayRange(userNumberOne, userNumberTwo).length * 0.3);
        const hiddenNumber = Math.floor(Math.random() * (Math.max(userNumberOne, userNumberTwo) - Math.min(userNumberOne, userNumberTwo) + 1))
        + Math.min(userNumberOne, userNumberTwo);
        console.log('hiddenNumber: ', hiddenNumber);

        const arrayPredictNumber = []; 
        let userPredictNumber;
  
        do {
          userPredictNumber = prompt(`Введите число от ${userNumberOne} до ${userNumberTwo}, у вас ${attempts} попытки`, '');

          switch (true) {
            case userPredictNumber === null:
              alert('Игра закончилась');
              finishRound = false;
              break;
            case Number.isNaN(+userPredictNumber) || userPredictNumber === '':
              alert('Введите число!');
              break;
            case arrayPredictNumber.includes(+userPredictNumber):
              alert('Это число вы уже вводили');
              break;
            case userPredictNumber > hiddenNumber && !(arrayPredictNumber.includes(+userPredictNumber)):
              arrayPredictNumber.push(+userPredictNumber);
              attempts -= 1
              attempts === 0 ? (alert('У вас закончились попытки, вы проиграли'), finishRound = false) : alert(`Загаданное число меньше ${userPredictNumber}! 
              У вас осталось ${attempts} попыток`);
              break;
            case userPredictNumber < hiddenNumber && !(arrayPredictNumber.includes(+userPredictNumber)):
              arrayPredictNumber.push(+userPredictNumber);
              attempts -= 1
              attempts === 0 ? (alert('У вас закончились попытки, вы проиграли'), finishRound = false) : alert(`Загаданное число больше ${userPredictNumber}! 
              У вас осталось ${attempts} попыток`);
              break;
            case +userPredictNumber === hiddenNumber:
              alert(`Вы угадали это число ${hiddenNumber}`);
              finishRound = false;
              break;     
          }
        } while (!(userPredictNumber === null) && !(+userPredictNumber === hiddenNumber) && !(attempts === 0))

      break;
    }

  } while (!(userNumberOne === null) && !(userNumberTwo === null) && finishRound)

}