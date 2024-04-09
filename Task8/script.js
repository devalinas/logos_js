/**
 * Написати програму, що обчислює піднесення до степеня. 
 * В 1й промпт вводиться число, а в 2й промпт степінь. 
 * Умови: Степінь може бути додатня, від'ємна або 0. Обрахувати всі можливі варіанти циклом for. 
 * Задачу бажано виконати, використовуючи 1 цикл!
    a^b = a*a b раз;
    a^-b= 1/a^b;
    a^0 = 1;
 */

let n = +prompt('Enter the number: ', '');
let power = +prompt('Enter the power to number: ', '');
let result = 1;

for(let i = 0; i < Math.abs(power); i++) {
    result *= n;
}

if(power < 0) result = 1 / result;

document.write(result);