let hamster = {
    get stomach(){
        if(!this.foods) this.foods = [];
        return this.foods;
    },
    set stomach(arrVal){
        this.foods = arrVal
    },

    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
speedy.eat("banana");
lazy.eat("carrot");
console.log( speedy.stomach ); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log( lazy.stomach ); // apple