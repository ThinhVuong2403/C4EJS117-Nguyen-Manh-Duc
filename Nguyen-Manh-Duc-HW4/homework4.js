// 1.1. property
// 1.2.
const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'White',
};

for (let x in product) {
    console.log(x + ': ' + product[x]);
}

// 2.
const task = {
    subject: 'Implement login feature',
    createdBy: 'Hoang Ngoc Duc',
    assignTo: 'Nguyen Phuong Nam',
    dueDate: '2019-10-08T18:00:24+0000',
    expectedHours: 0.5,
};

const { subject, dueDate, assignTo } = task;
console.log({ subject, dueDate, assignTo });

// 3.
// 3.1. Object
// 3.2. Array
// 3.3. Object.hits[x].y
// x: 0 -> hits.length - 1
// y: jobTitle, location, salary, benefits, skills,
// requirements.

// 4.
let dict = {
    debug: 'The process of figuring out why your program has a certain error and how to fix it',
    done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
    defect: 'The formal word for ‘error’',
    pm: 'The short version  of Project Manager, the person in charge of the final result of a project',
    ["ui/ux"]: 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels',
};

// 4.2.
while (true) {
    alert('Hi there, this is dev dictionary');
    let key = prompt('Enter a keyword');
    let val = dict[key];
    if (val) {
        alert(key + "\n" + val);
    } else if (key == '') {
        break;
    } else {
        let add = prompt('We could not find your word: ' + key + ', leave your explanation');
        dict[key] = add;
        alert('Done');
    }
}

// 5. 
let products = [{
    name: 'Xiaomi portable charger 20000mah',
    brand: 'Xiaomi',
    price: 428,
    color: 'White',
    category: 'charger',
}, {
    name: 'VSmart Active 1',
    brand: 'VSmart',
    price: 5487,
    color: 'Black',
    category: 'phone',
}, {
    name: 'IPhone X',
    brand: 'Apple',
    price: 21490,
    color: 'Gray',
    category: 'phone',
}, {
    name: 'Samsung Galaxy A9',
    brand: 'Samsung',
    price: 8490,
    color: 'Blue',
    category: 'phone',
}];

// 5.1.
function myPrint() {
    let str = '';
    for (let i = 0; i < 34; i++) {
        str += '-';
    }
    console.log(str);
}

for (let i = 0; i < products.length; i++) {
    myPrint();
    console.log('Name: ' + products[i].name);
    console.log('Price: ' + products[i].price);
}

// 5.2.
for (let i = 0; i < products.length; i++) {
    console.log('#' + (i + 1) + '. ' + products[i].name);
    console.log('    Price: ' + products[i].price);
}

while (true) {
    let pos = Number(prompt('Enter product position:'));
    if (pos == 0) {
        break;
    } else {
        let item = products[pos - 1];
        console.log("Name: " + item.name);
        console.log("Brand: " + item.brand);
        console.log("Price: " + item.price);
        console.log("Color: " + item.color);
        console.log("Category: " + item.category);
    }
}


// 5.3.
while (true) {
    let cate = prompt('Enter your category?');
    if (cate == '') {
        break;
    } else {
        for (let i = 0; i < products.length; i++) {
            if (products[i].category == cate) {
                myPrint();
                console.log('Name: ' + products[i].name);
                console.log('Price: ' + products[i].price);
            }
        }
    }
}

// 5.4.
products[0].providers = 'phukienzero dientuccc';
products[1].providers = 'tgdd ddghn vhstore';
products[2].providers = 'tgdd';
products[3].providers = 'tgdd';
for (let i = 0; i < products.length; i++) {
    console.log('#' + (i + 1) + '. ' + products[i].name);
    console.log('    Price: ' + products[i].price);
    console.log('    Providers: ' + products[i].providers);
}

// 5.5.
function addComma(str) {
    let arr = str.split(' ');
    for (let i in arr) {
        if (i != 0) {
            arr[i] = ',' + arr[i];
        }
    }
    let str1 = '';
    for (let i in arr) {
        str1 += arr[i];
    }
    return str1;
}
while (true) {
    let provider = prompt('Enter provider');
    if (provider == '') {
        break;
    } else {
        for (let i = 0; i < products.length; i++) {
            if (products[i].providers.split(' ').includes(provider)) {
                myPrint();
                console.log('Name: ' + products[i].name);
                console.log('Brand: ' + products[i].brand);
                console.log('Price: ' + products[i].price);
                console.log('Color: ' + products[i].color);
                console.log('Category: ' + products[i].category);
                console.log('Providers: ' + addComma(products[i].providers));
            }
        }
    }
}


// 6.
// 6.1.
let objectTask = [{
    name: 'HTML',
    complete: false,
}, {
    name: 'CSS',
    complete: false,
}, {
    name: 'Basics of JavaScript',
    complete: false,
}, {
    name: 'Node Package Manager (npm)',
    complete: false,
}, {
    name: 'Git',
    complete: false,
}];

function myconsole(ArrayOb) {
    for (let i = 0; i < ArrayOb.length; i++) {
        if (ArrayOb[i].complete) {
            console.log((i + 1) + '. ' + '[x] ' + ArrayOb[i].name);
        } else {
            console.log((i + 1) + '. ' + '[ ] ' + ArrayOb[i].name);
        }
    }
    let str = '';
    for (let i = 0; i < 70; i++) {
        str += '-';
    }
    console.log(str);
}

while (true) {
    console.log('Hi there, this is your learning tasks to front-end developer career:');

    myconsole(objectTask);

    let command = prompt('Enter your command (New, Delete, Update, Complete)').toLowerCase();
    if (command == 'new') {
        let newtask = prompt('Enter new task:');
        let newob = { name: newtask, complete: false };
        objectTask.push(newob);
    } else if (command == 'update') {
        let pos = Number(prompt('Enter position:')) - 1;
        let title = prompt('Enter new title');
        objectTask[pos].name = title;
    } else if (command == 'complete') {
        let pos = Number(prompt('Enter position:')) - 1;
        objectTask[pos].complete = true;
    } else if (command == 'delete') {
        let pos = Number(prompt('Enter position:')) - 1;
        objectTask.splice(pos, 1);
    } else {
        break;
    }
}










