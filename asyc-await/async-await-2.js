// Перепишите, используя async/await
//
// Ниже пример из раздела Цепочка промисов,
// перепишите его, используя async/await вместо .then/catch.
//
// В функции demoGithubUser замените рекурсию на цикл:
// используя async/await, сделать это будет просто.

const prompt = require('prompt-sync')();
const fetch = require('node-fetch');

class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {
    let response = await fetch(url);
    if(response.status == 200)   return await response.json();
    throw new HttpError(response);
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {
    while( true ) {
        let name = prompt("Введите логин?", "iliakan");
        try{
            let user = await loadJson(`https://api.github.com/users/${name}`);
            console.log(`Полное имя: ${user.name}.`);
            return user;
        } catch ( err ) {
            if (err instanceof HttpError && err.response.status == 404) {
                console.log("Такого пользователя не существует, пожалуйста, повторите ввод.");
            } else {
                throw err;
            }
        }
    }
}

demoGithubUser()
    .then(user => console.log(user))
    .catch(globalErr => console.log(globalErr));