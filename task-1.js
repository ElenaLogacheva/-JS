const films = ["Властелин Колец", "Гарри Поттер", "Малефисента"];
const answers = [];
let message = " ";

for (let i=0; i<films.length; i++) {
    let currentAnswer = prompt("Смотрели ли вы " + films[i] + " ? Да/Нет"); 
    answers.push(currentAnswer);
    message+=`${i + 1}.${films[i]} : ${answers[i]}\n`;
}

alert(message);