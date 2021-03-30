//Sum with closures

//sum(a)(b) = a+b;
//sum(1)(3) = 4

function sum(n) {
    return (m) => n+m;
}

console.log(sum(5)(4));

function inBetween( a, b ) {
    return (n) => a <= n && n <= b;
}

let inArray = (arr) => (n) => arr.includes(n);

/* .. ваш код для inBetween и inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];

let filteredBetween = arr.filter(item => inBetween(3, 6)(item));
let filteredContains = arr.filter(inArray([1, 2, 10]));

console.log(arr);
console.log(filteredBetween);
console.log(filteredContains);


let byField = fieldName => (a,b) => a[fieldName] > b[fieldName] ? 1 : -1;

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

console.log(users);
console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));
