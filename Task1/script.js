/*
    Створіть програму, яка обчислює факторіал натурального числа n, яке користувач введе з клавіатури.
*/

alert('Factorial calculations');

let factorial = 1;
let n = +prompt('Enter the natural digit: ', '');

if (n != 0) {
    for(let i = 1; i <= n; i++) {
        factorial *= i;
    }
} else { factorial = 0; }

alert(`Factorial of the digit ${n} is ${factorial}`);
