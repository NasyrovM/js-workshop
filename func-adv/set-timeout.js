/*
Напишите функцию printNumbers(from, to),
которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout.
*/

function printNumber(from, to) {
    let point = from;
    let token = setInterval(()=> {
        console.log(point);
        if(point == to){
            clearInterval(token);
        }
        point++;
    }, 1000);
}

function printNumberRecur(from, to) {
    console.log(from);
    if(from < to)  setTimeout(() => printNumberRecur( ++from, to ), 1000);
}

//printNumber(2,6);
printNumberRecur(2,6);

