/*
    Потрібно написати програму, яка обчислить вартість покупки. 
    Людина купила 4 ручки по 5.25 грн і 6 олівців по 3.50 грн. 
    Командами JavaScript потрібно обрахувати загальну вартість і 
    вивести результат в document.write (для вартостей і кількостей товарів постворювати окремі змінні).
*/

let pen = 5.25;
let pencil = 3.50;

let penCount = 4;
let pencilCount = 6;

let generalPrice = penCount * pen + pencilCount * pencil;
document.write('General price: ', generalPrice);