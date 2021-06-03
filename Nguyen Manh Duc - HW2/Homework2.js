// 1.

// 1. var and const are variable declarations in JavaScript.

// 2. let is block scoped, "ReferenceError" is displayed when we try to access 
// a variable before it is declared.

// 3. let and const are both block scoped, "ReferenceError" is displayed when we
// try to access a variable before it's declared. However, let variables can be
// re-assigned, while const variables cannot be re-assigned, only the properties
// of the const objects can be mutated.

// 4. var should not be used in any case.
// const should be used when you want to signal a warning to yourself and others
// looking into your code that the variable should not be re-assigned.
// let should be used when you intend to re-assign the variable.


// 2.
// 1. Boolean is a primitive data type commonly used in computer programming 
// languages. A boolean has 2 possible values: true, false.
// 2. A logical operator, or a comparison results in a Boolean.

// 3.
// a.
for (let i = 0; i < 7; i++) {
    console.log(i);
}

// b.
let i = 0;
let number = Number(prompt('Enter a number?'));
while (i < number) {
    console.log(i);
    i++;
}

// c.
let s = 3;
let number2 = Number(prompt('Enter n'));
while (s < number2) {
    console.log(s);
    s++;
}

// d.
let n = Number(prompt('Enter n'));
let c = Number(prompt('Enter c'));
for (let i = c; i < n; i++){
    console.log(i);
}

// e.
let n2 = Number(prompt('Enter n'));
let c2 = Number(prompt('Enter c'));
for (let i = c2; i < n2; i += 3) {
    console.log(i);
}

// f. 
let n3 = Number(prompt('Enter n'));
let c3 = Number(prompt('Enter c'));
let s1 = Number(prompt('Enter s'));
while (c3 < n3) {
    console.log(c3);
    c3 += s1;
}

// 4.
var c4 = 1;
let n5 = Number(prompt('Enter a number'));
for (let i = 1; i <= n5; i++) {
    c4 *= i;
}
alert(`The factorial of ${n5} is ${c4}`);

// 5.
let age = Number(prompt('How old are you?'));
if (age < 14) {
    alert('You are not old enough to view this content');
} else {
    alert('Enjoy!');
}

// 6.
let x = Number(prompt('Enter a number'));
if (x < 5) {
    alert('Lower half of 9');
} else {
    alert('Higher half of 9');
}

// 7.
let n6 = Number(prompt('n ='));
let x7 = Number(prompt('x ='));
if (x7 <= (n6/2)) {
    alert(`${x7} is in lower half of ${n6}`);
} else {
    alert(`${x7} is in higher half of ${n6}`);
}

// 8.
let x8 = Number(prompt('x ='));
if (x8 % 2 == 0) {
    alert(`${x8} is an even number`);
} else {
    alert(`${x8} is an odd number`);
}

// 9.
// a.
for (let i = 0; i < 6; i++) {
    if (i < 3) {
        console.log('L');
    } else {
        console.log('H');
    }
}

// b. 
let num = Number(prompt("Enter the total number of L's and H's?"));
for (let i = 0; i < num; i++) {
    if (i < (num/2)) {
        console.log('L');
    } else {
        console.log('H');
    }
}

// c.
for (let i = 0; i < 8; i++) {
    if (i % 2) {
        console.log(1);
    } else {
        console.log(0);
    }
}

// d.
let m = Number(prompt("Enter the total number of 1's and o's?"));
for (let i = 0; i < m; i++) {
    if (i % 2) {
        console.log(1);
    } else {
        console.log(0);
    }
}

// 10.
let weight = Number(prompt('Your weight in kg?'));
let height = Number(prompt('Your height in cm?'));
let BMI = weight / (height * height / 10000);
alert(`Your BMI is ${Math.round(BMI)}`);
if (BMI < 16) {
    alert('You are severely underweight');
} else if (BMI < 18.5) {
    alert('You are underweight');
} else if (BMI < 25) {
    alert('You are normal');
} else if (BMI < 30) {
    alert('You are overweight');
} else {
    alert('You are obese');
}
