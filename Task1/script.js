/*
    Написати тест на довільну тему з 10-ти питань. 
    Якщо користувач відповідає вірно, додаємо бал. Якщо відповідає невірно, тоді нічого не робимо. 
    В кінці виводимо статистику про кількість правильних відповідей з можливих 10. 
    І повідомлення для користувача про рівень знань відносно набраних балів.
*/

let test;
let counter = 0;

alert('Will be ready! Test questions');

test = prompt('2 + 2 = ', 'I don\'t know');
if(test == 4) counter++;

test = prompt('2 + 3 = ', 'I don\'t know');
if(test == 5) counter++;

test = prompt('8 * 2 = ', 'I don\'t know');
if(test == 16) counter++;

test = prompt('12 - 12 = ', 'I don\'t know');
if(test == 0) counter++;

test = prompt('0 + 2 = ', 'I don\'t know');
if(test == 2) counter++;

test = prompt('2024 + 2024 = ', 'I don\'t know');
if(test == 4048) counter++;

test = prompt('20 + 20 = ', 'I don\'t know');
if(test == 40) counter++;

test = prompt('19 + 2 = ', 'I don\'t know');
if(test == 21) counter++;

test = prompt('2 / 2 = ', 'I don\'t know');
if(test == 1) counter++;

test = prompt('100 + 2 = ', 'I don\'t know');
if(test == 102) counter++;

switch(counter) {
    case 0 :
    case 1 :
    case 2 :
    case 3 :
    case 4 :
    case 5 :
        alert(`You lose! Right answers are ${counter}`);
        break;
    case 6 :
    case 7 :
    case 8 :
        alert(`You will be better! Right answers are ${counter}`);
        break;
    default :
        alert(`You win! Right answers are ${counter}`);
        break;
};