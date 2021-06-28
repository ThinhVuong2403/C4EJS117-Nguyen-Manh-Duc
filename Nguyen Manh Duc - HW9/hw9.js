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


// 3.