function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    }

    counter.set = value => count = value;

    counter.decrease = () => --count;

    return counter;
}

let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter.set(6));
console.log(counter.decrease());
console.log(counter.decrease());

