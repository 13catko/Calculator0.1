do {
  n = +prompt("Введите положительное число")
} while (isNaN(n) || n < 0)


let sum = 0;
for (let i = 0; i < n; i++) {
  sum += i;
  document.write(i + ' ' + sum + '<br>')
}




let answer = parseInt(Math.random() * 100);
let maxTrueCount = 10;


for (let tryCount = 1; tryCount <= maxTrueCount; tryCount++) {
  let userAnswer = +prompt('Введите число');
  if (answer == userAnswer) {
    alert("Поздравляю вы угадали")
    break;
  } else if (answer < userAnswer) {
    alert("Вы ввели слишком большое число")
  } else if (answer > userAnswer) {
    alert("Вы ввели слишком маленькое число число")
  }
  alert('У вас осталось попыток ' + (maxTrueCount - tryCount))
}