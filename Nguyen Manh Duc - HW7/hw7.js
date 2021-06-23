// 1.
// 1d, 2a, 3c, 4b

// 2.
let myTime = setInterval(() => { console.log("Duplicate") }, 3000);
clearInterval(myTime);
let myTime2 = setTimeout(() => { console.log("Duplicate") }, 3000);
clearTimeout(myTime2);

// 3. No, No.

// 4.
let elemArr = document.getElementsByTagName("li");
console.log(elemArr[0]);
for (let i of elemArr) {
    console.log(i);
}

// 5.
let elemArr2 = document.getElementsByClassName("singer");
console.log(elemArr2);
console.log(elemArr2[1]);
for (let i of elemArr2) {
    console.log(i);
}

// 6.
elemArr2[2].remove();

// 7. e.target is the HTMLElement that has been clicked
//    e.key is each character typed by the user

let elem1 = document.getElementById("button1");
elem1.addEventListener('click', (e) => { console.log(e.target) });

let elem2 = document.getElementById("button2");
elem2.addEventListener('click', (e) => { console.log(e.target) });

let elem3 = document.querySelector("input");
elem3.addEventListener('keydown', (e) => { console.log(e.key) });

// 10.
const showName = (name, wish) => {
    if (wish == '') {
        alert('My name is ' + name + ' and I have no wish this year.');
    } else {
        alert('My name is ' + name + ' and I wish to ' + wish + ' this year.');
    }
}

// 11.
let userInputElem = document.getElementById("name_input");
userInputElem.addEventListener('click', (e) => {
    console.log(e.target);
    let elem4 = document.getElementById('upper_btn');
    let elem5 = document.getElementById('result_div');
    console.log(elem5);
    elem4.addEventListener('click', (e) => {
        console.log(e.target);
        let upper = (userInputElem.value).toUpperCase();
        elem5.textContent = upper;
    });
});

// 12.
let items = ['Backpack', 'MiBand watch', 'Ring'];

const readDom = document.getElementById("item_list_ul");

function updateList() {
    readDom.innerHTML = '';
    for (let i = 0; i < items.length; i++) {
        readDom.insertAdjacentHTML('beforeend', `<li><span>${items[i]} </span><button class="remove_btn">remove</button></li><br>`);
    };

    const arrDom = document.getElementsByClassName('remove_btn');
    for (let i = 0; i < arrDom.length; i++) {
        arrDom[i].addEventListener('click', () => {
            items.splice(i, 1);
            updateList();
        });
    };
}

updateList();

const addButton = document.getElementById('add_btn');
const newItem = document.getElementById('item_input');

addButton.addEventListener('click', () => {
    items.push(newItem.value);
    updateList();
    newItem.value = '';
});







