const prompt = require('prompt-sync')();
const n = +prompt('n=');
console.log(`n is ${n}\n\n`);

function sumCycle(n) {
    let sum = 0;
    for(let i=1;i<=n;i++) sum += i;
    return sum;
}

function sumRecursive(n) {
    if ( n == 1 ) return 1;
    return sumRecursive(n-1) + n;
}

function sumProgression(n) {
    return n * (n + 1) / 2;
}

function factorialRecursive(n){
    if ( n == 1 ) return 1;
    return factorialRecursive(n-1 ) * n;
}


function cycleFibonachi(n) {
    if( n < 3 ) return 1;
    let prevPrev = 1;
    let prev = 1;
    for(let i = 3; i < n; i++){
        let sum = prevPrev + prev;
        prevPrev = prev;
        prev = sum;
    }
    return prevPrev + prev;
}

function recursiveFibonachi(n, i = 3, prevPrev = 1, prev = 1) {
    if( n < 3 ) return 1;
    const sum = prevPrev + prev;
    if( i == n) return sum;
    return recursiveFibonachi(n, ++i, prev, sum);
}

console.log(`cycle sum result = ${sumCycle(n)}\n`);
console.log(`recursive sum result = ${sumRecursive(n)}\n`);
console.log(`progression sum result = ${sumProgression(n)}\n`);
console.log(`recursive factorial result = ${factorialRecursive(n)}\n`);
console.log(`recursive Fibonachi result = ${recursiveFibonachi(n)}\n`);
console.log(`cycle Fibonachi result = ${cycleFibonachi(n)}\n`);

const list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printListCycle(list) {
    let cur = list;
    let arr = [];
    while( cur ) //null of undefined
    {
        console.log(`${cur.value} `);
        arr.push(cur.value);
        cur = cur.next;
    }
    arr.reverse();
    console.log("\nList backwards");
    arr.forEach(item => console.log(`${item}`));
};

function printListRecursive(list) {
    console.log(list.value);
    if(list.next) printListRecursive(list.next);
}

function printListRecursiveBack(list) {
    if(list.next) printListRecursiveBack(list.next);
    console.log(list.value);
}


printListCycle(list);
console.log("Print list recursive forward");
printListRecursive(list);
console.log("Print list recursive backward");
printListRecursiveBack(list);
