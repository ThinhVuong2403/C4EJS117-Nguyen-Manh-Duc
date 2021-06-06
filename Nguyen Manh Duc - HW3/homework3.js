// 1.

let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b);

a = 4;
b = 5;
let temp;
temp = a;
a = b;
b = temp;
console.log(a, b);

// 2.
let str = 'Hello, there. I am D';
let array = str.split(" ", 1);
console.log(array);

// 3.
const a1 = [4, 5, 7, -8];
console.log(...a1);

// 4.
let array1 = ['Jeans', 'T-Shirt', 'Socks'];
function readArray(arrayn) {
    console.log('The current items are:');
    for (let i = 0; i < arrayn.length; i++) {
        console.log(`${i + 1}. ${arrayn[i]}`);
    }
}

while (true) {
    let name2 = prompt("Hi there, welcome to shop admin panel, what do you want (C, R, U, D)").toLowerCase();
    if (name2 == 'd') {
        let pos = Number(prompt('Enter the position you want to delete')) - 1;
        alert('Done');
        array1.splice(pos, 1);
    } else if (name2 == 'r') {
        readArray(array1);
    } else if (name2 == 'c') {
        let newItem = prompt('Enter the name of the new item');
        alert('Done');
        array1.push(newItem);
    } else if (name2 == 'u') {
        let pos = Number(prompt('Enter the position you want to update')) - 1;
        let newname = prompt('Enter the new name');
        alert('Done');
        array1[pos] = newname;
    } else if (name2 == '') {
        alert('Bye');
        break;
    } else {
        alert('This command is not supported');
    }
}

// 5.
let sequence = prompt('Enter a sequence of Number, separated by the commas(,)').split(',');
let sum = 0;
for (let i = 0; i < sequence.length; i++) {
    sum += Number(sequence[i]);
}
alert(`The sum of them is ${sum}`);

// 6.
sequence = prompt('Enter a sequence of numbers, separated by ","').split(',');
let smallest = Number(sequence[0]);
for (let i = 1; i < sequence.length; i++) {
    if (Number(sequence[i]) < smallest) {
        smallest = Number(sequence[i]);
    }
}
alert(`The smallest number is ${smallest}`);

// 7.
const arr = [3, 4, 6, -9, 10, -88, 2];
while (true) {
    let num = Number(prompt('Enter a number'));
    if (num == '') {
        break;
    } else if (arr.includes(num)) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == num) {
                alert(`${num} is FOUND in my array at index ${i}`);
            }
        }
    } else {
        alert(`${num} is NOT found in my array`);
    }
}

// 8. 
let sheepArr = [5, 7, 300, 90, 24, 50, 75];
const defaultsize = 8;
const increase = 50;
const unit = 2;
const count = 4;
console.log('Hello, my name is Phuong Nam and here is my sheep sizes:');
console.log(...sheepArr);
console.log('');
console.log(`Now my biggest sheep has size ${Math.max(...sheepArr)}, let's shave it`);
console.log('');
console.log('After shearing, here is my flock');
sheepArr[sheepArr.indexOf(Math.max(...sheepArr))] = defaultsize;
console.log(...sheepArr);
console.log('');
for (let i = 1; i < count; i++) {
    console.log('');
    console.log(`MONTH ${i}`);
    console.log('One month has passed, my sheep have grown, here are their sizes');
    for (let j = 0; j < sheepArr.length; j++) {
        sheepArr[j] += increase;
    }
    console.log(...sheepArr);
    console.log('');
    if (i < 3) {
        console.log(`Now my biggest sheep has size ${Math.max(...sheepArr)}, let's shave it`);
        console.log('');
        console.log('After shearing, here is my flock');
        sheepArr[sheepArr.indexOf(Math.max(...sheepArr))] = defaultsize;
        console.log(...sheepArr);
    } else {
        let total = 0;
        for (let i = 0; i < sheepArr.length; i++) {
            total += sheepArr[i];
        }
        console.log(`My flock has size in total: ${total}`);
        console.log(`I would get ${total} * ${unit}$ = ${total * unit}`);
    }
}

// 10.
let seq = prompt('Enter a sequence of names');
let seq2 = seq.split(',');
let strn = '';
for (let i = 0; i < seq2.length; i++) {
    if (i != (seq2.length - 1)) {
        strn += '<' + seq2[i] + '>,';
    } else {
        strn += '<' + seq2[i] + '>';
    }
}
alert(seq + ' => ' + strn);

