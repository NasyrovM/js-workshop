/*
* Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку,
* передавая вызов в f не более одного раза в ms миллисекунд.
* Те вызовы, которые попадают в период «торможения», игнорируются.
* */

function f(a) {
    console.log(a)
}

function throttle(handler, delayMs){
    let isBusy = false;
    let lastArgs = null;
    let lastContext = null;

    function wrapper() {
        lastArgs = arguments;
        lastContext = this;

        if(isBusy) return;

        handler.apply(lastContext, lastArgs);

        isBusy = true;

        setTimeout(() => {
            isBusy = false;
            if(lastArgs){
                wrapper.apply(lastContext, lastArgs);
                lastArgs = lastContext = null;
            }
        }, delayMs);
    }

    return wrapper;
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)




