/*
    Написати програму, яка видає користувачу ввести число. 
    Після введення числа вистрибує алерт з оголошенням пори року,
    до якої відноситься число (номер місяця), що ввів користувач.
    Якщо число не входить в діапазон від 1 до 12, тоді неможливо.
*/

const months = 
    ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let digit = prompt('Enter the desired number: ');
let res = ()=>{if (1 >= digit || digit <= 12)return months[--digit]; else return 'Undefined value'};
alert(`${res()}`);
