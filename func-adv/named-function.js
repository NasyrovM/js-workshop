/*
Напишите функцию sum, которая бы работала следующим образом:

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15
* */

function sum(n) {

    let integra = n;

    function recur(m) {
        integra += m;
        return recur;
    }

    recur.toString = function() {
        return integra;
    }

    return recur;
}

console.log(`${sum(1)(2)}`);
console.log(`${sum(1)(2)(3)}`);
console.log(`${sum(5)(-1)(2)}`);
console.log(`${sum(6)(-1)(-2)(-3)}`);
console.log(`${sum(6)(-1)(-2)(-3)}`);
console.log(`${sum(0)(1)(2)(3)(4)(5)}`);
