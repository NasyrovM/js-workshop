// Перепишите один из примеров раздела Цепочка промисов,
// используя async/await вместо .then/catch:

var fetch = require('node-fetch');

async function loadJson(url) {
    let response = await fetch(url);
    if(response.status == 200) {
        let json = await response.json();
        return json;
    }

    throw new Error(response.status);
}

loadJson('https://api.github.com/users/batalandabat')
    .then(data => console.log(data))// (3)
    .catch(err => console.log(err)); // Error: 404