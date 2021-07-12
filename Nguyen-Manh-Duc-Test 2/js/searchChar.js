function displayChar(object, body) {
    body.insertAdjacentHTML('beforeend', `<div class="container-char"><div id=${object["name"]}><b style='font-size:30px'>${object["name"]}</b></div><div><img src=${object["image"]}></div><div>House: ${object["house"]}</div></div><br><br>`);
}

async function displayAll(url, body) {
    const data = await fetch(url);
    const json = await data.json();
    const allObj = json["data"];
    for (let i of allObj) {
        displayChar(i, body);
    }
}


async function displayName(name, source, body) {
    const data = await fetch(source);
    const json = await data.json();
    const arr = json["data"];
    body.innerHTML = '';
    for (let i of arr) {
        if ((i["name"].toLowerCase()).includes(name.toLowerCase())) {
            body.insertAdjacentHTML('beforeend', `<div class="container-char"><div id=${i["name"]}><b style='font-size:30px'>${i["name"]}</b></div><div><img src=${i["image"]}></div><div>House: ${i["house"]}</div></div><br><br>`);
        }
    }
}