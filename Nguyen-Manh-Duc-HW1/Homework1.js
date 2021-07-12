// 1. "SyntaxError" appears When the variable's name:
// - starts with a number
// - includes special characters, apart from "_" and "$".
// - Is identical with JavaScipt's keywords. 
// Ex: "2school", "school cat", "t@o".

// 2. Use typeof

// 2. 1b, 2a, 3e, 4c, 4d

// 3.
// a.
let message = 'Coding is great';
console.log(message);
// b.
let studentCount = 0;
console.log(studentCount);

// 4.
// a.
message = 'Coding might not be easy, but still great';
console.log(message);
// b.
studentCount = 12;
console.log(studentCount);
// c.
message = message.toLowerCase();
console.log(message);
//d.
studentCount++;
console.log(studentCount);

// 5.
alert("You look beautiful today");

// 6.
let name1 = prompt("Hi there, your name please?");
alert(`Hi ${name1}`);

// 7.
let fname = prompt("Enter your first name");
let lname = prompt("Enter your last name");
alert(`Hi ${lname + " " + fname}`);

// 8.
let slength = prompt("Enter side length of the square");
alert(`The square area is ${slength * slength}`);

// 9.
let radius = prompt("Enter the radius of the circle");
alert(`The circle area is ${3.14 * radius * radius}`);

// 10.
let tempC = prompt("Enter the temperature in Celcius");
alert(`${tempC} (C) = ${tempC * 9 / 5 + 32} (F)`);