// 1.

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise is da best'), 5000);
});

const b1 = document.getElementById('b1');
async function consume() {
    b1.textContent = await myPromise;
}

consume();

myPromise.then((resolve) => { b1.textContent = resolve });
myPromise.then(resolve => b1.textContent = resolve);
myPromise.then(resolve => { b1.textContent = resolve });

// 2.
const fetchPromise = fetch('https://pokeapi.co/api/v2/pokemon/pikachu/');
async function extractPoke() {
    const rawData = await fetchPromise;
    const parseData = await rawData.json();
    console.log(parseData.stats[2].stat);
}

extractPoke();

fetch('https://pokeapi.co/api/v2/pokemon/pikachu/')
    .then(x => x.json())
    .then(y => console.log(y.stats[2].stat));


// 3. https://sheetdb.io/api/v1/jxqygpe1wi8j6

// 4.
const random = () => {
    const end = 10;
    return Math.floor(Math.random() * (end + 1));
};

const x = random();
if (x < 0) {
    console.log('Failed: the number is smaller than 0');
} else if (x > 10) {
    console.log('Failed: the number is bigger than 10');
} else {
    console.log('Passed, bravo');
}

// 5.
const random2 = (a, b) => {
    return [a, b, Math.floor(Math.random() * (b + 1 - a)) + a];
};

const x2 = random2(4, 16);
if (x2[2] < x2[0]) {
    console.log(`Failed: the number is smaller than ${x2[0]}`);
} else if (x2[2] > x2[1]) {
    console.log(`Failed: the number is bigger than ${x2[1]}`);
} else {
    console.log('Passed, bravo');
}


// 6.
const dist2Points = (a, b, c, d) => {
    return Math.sqrt((a - c) ** 2 + (b - d) ** 2);
};

const d = dist2Points(3, 10, 0, 6);
if (d !== 5) {
    console.log('Failed: the calculation is wrong');
} else {
    console.log('Passed, bravo');
}

// 7.
const rawAPI = fetch('http://quotes.rest/qod.json');
async function displayHTML() {
    const data2 = await rawAPI;
    const parsed = await data2.json();
    const content = parsed.contents.quotes[0].quote;
    const author = parsed.contents.quotes[0].author;
    document.getElementById('b7').textContent = content;
    document.getElementById('b7b').textContent = author;
}
displayHTML();


// 8.

const value = document.getElementById('new');
const click = document.getElementById('submit');

async function display() {
    const data1 = fetch('https://sheetdb.io/api/v1/6fm2vsjaj1q1w');
    const datax = await data1;
    const parsex = await datax.json();
    value.value = '';
    const div = document.getElementById('display');
    div.innerHTML = '';
    for (let x in parsex) {
        div.insertAdjacentHTML('beforeend', `<p class='item'>${Number(x)+1}. ${parsex[x].name} <button id=${Number(x)+1}>X</button></p>`);
        const del = document.getElementById(`${Number(x) + 1}`);
        del.addEventListener('click', () => {
            axios.delete(`https://sheetdb.io/api/v1/6fm2vsjaj1q1w/name/${parsex[x].name}`)
                .then(response => { console.log(response.data) });
        });
    }
    click.addEventListener('click', () => {
        axios.post('https://sheetdb.io/api/v1/6fm2vsjaj1q1w', {
            "data": [{ "name": `${value.value}` }]
        }).then(response => { console.log(response.data) });
        display();
    });
};

display();