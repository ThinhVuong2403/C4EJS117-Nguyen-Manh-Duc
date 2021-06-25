// // 1.
// while (true) {
//     let str_input = prompt('Enter a string');
//     if (str_input === '') {
//         break;
//     } else {
//         let arr = str_input.split('');
//         let revArr = '';
//         for (let i = arr.length - 1; i > -1; i--) {
//             revArr += arr[i];
//         };
//         alert(revArr);
//     }
// }

// // 2.
// while (true) {
//     let str_input = prompt('Enter a string');
//     if (str_input === '') {
//         break;
//     } else {
//         let arr = str_input.split('');
//         arr[0] = arr[0].toUpperCase();
//         let newArr = '';
//         for (let i of arr) {
//             newArr += i;
//         }
//         alert(newArr);
//     }
// }

// // 3.
// function newArr(arr) {
//     let arr2 = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!(arr2.includes(arr[i]))) {
//             arr2.push(arr[i]);
//         }
//     }
//     console.log(arr2);
// }
// newArr([1, 2, 3, 5, 6, 5]);


// // 4.
// let data = [{
//     name: "John",
//     age: 23,
//     wage: "200$",
//     title: "Engineer",
// }, {
//     name: "Jo",
//     age: 33,
//     wage: "410$",
//     title: "Senior Engineer",
// }, {
//     name: "Jonz",
//     age: 45,
//     wage: "1000$",
//     title: "CEO",
// }, ];

// function read() {
//     console.log(data);
// };

// function create(newEmployee) {
//     data.push(newEmployee);
// };

// function update(indexItem = {}, attribute, newAttribute) {
//     indexItem[attribute] = newAttribute;
// };

// function deleteItem(index) {
//     data.splice(index, 1);
// };

// 5.
let date = prompt('Enter date');

function checkValidDate(date) {
    let arr = date.split('/');
    let day = Number(arr[0]);
    let month = Number(arr[1]);
    let year = Number(arr[2]);
    if (day > 0 && day < 32) {
        if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
            return true;
        }
    }
    if (day > 0 && day < 31) {
        if ([4, 6, 9, 11].includes(month)) {
            return true;
        }
    }

    if ((year % 4 == 0) && (year % 100 != 0) ||
        (year % 400 == 0)) {
        if (day > 0 && day < 30) {
            return true;
        }
    }
    if (!((year % 4 == 0) && (year % 100 != 0) ||
            (year % 400 == 0))) {
        if (day > 0 && day < 29) {
            return true;
        }
    }
    return false;
}