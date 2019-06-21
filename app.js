
// let arr = [5, 2, 1, -10, 8];
// function sortReverse(arr) {
//   return arr.slice(0).sort((a, b) => b - a);
// }
// console.log(sortReverse(arr));
// console.log(arr);

// let arr = [5, 3, 8, 1];

// function filterRangeInPlace(arr, a, b) {

//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] < a || arr[i] > b) {
//       arr.splice(i, 1);
//       //i--;
//     }
//   }

//   console.log(arr);
// }

//filterRangeInPlace(arr, 1, 4);
//console.log(arr);
// function filterRange(arr, a, b) {
//   return arr.filter(item =>
//     (+item >= a && +item <= b))
// }
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// console.log(arr)
// function camelize(str) {
//   return str.split('-').map(
//     (item, index) =>
//       (index == 0) ? item : item.charAt(0).toUpperCase() + item.slice(1)
//   ).join('')
// }

// console.log(camelize('-webkit-transition'));

// function getMaxSubArray(arr) {
//   let maxSum = 0;
//   let currSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     currSum += arr[i];
//     if (currSum > maxSum) {
//       maxSum = currSum;
//       continue;
//     } else {
//       currSum = 0;
//     }
//   }

//   return maxSum;
// }
// let arr1 = [100, -9, 2, -3, 5];
// console.log(getMaxSubArray(arr1))
// let arr = ["a", "b"];

// arr.push(function() {
//   console.log( this );
// })

// arr[2]();


// function extractCurrencyValue(str) {
//   return +str.slice(1);
// }
// console.log(extractCurrencyValue('$120'))
// function truncate(str, maxlength) {
//   return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '...' : str;
// }

// console.log(truncate("What I'd like to tell on this topic is:", 20))

// let id = Symbol("id");
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
//   [id]: "id23",
//   sayHi() {
//     console.log("Hi Ivana");
//   }
// };

// function sayHiWithThis() {
//   let arrow = () => { console.log(this.title + ', Hi'); };
//   arrow();
// }

// sayHiWithThis = sayHiWithThis.bind(menu);

// let multiplyNumeric = function (obj) {
//   for (let key in obj) {
//     console.log(key)
//     if (typeof obj[key] == "number") {
//       obj[key] *= 2;
//     }
//   }
// }

// multiplyNumeric(menu);
//console.log(Object.keys(menu));
//console.log(Object.getOwnPropertyNames(menu))
//console.log(sayHiWithThis())

// let user = {
//   name: "John",
//   go: function () { console.log(this.name) }
// };

// (user.go)() // John

// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// };

// let user = makeUser();
// console.log(user.ref.name)
// 'use strict'
// for(let i = 0; i < process.argv.length; i++) {
//   console.log(i, process.argv[i]);
// }
// console.log(process.argv)

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() {
//     console.log(this.step);
//   }
// }
// ladder.up().up().down().showStep();

// function Calculator() {
//   this.read = function () {
//     this.a = +process.argv[2];
//     this.b = +process.argv[3];
//   };
//   this.sum = function () {
//     return this.a + this.b;
//   };
//   this.mul = function () {
//     return this.a * this.b;
//   }
// };

// let cal1 = new Calculator();
// cal1.read();
// console.log(cal1.sum());
// function randomBetween(min, max) {
//   return Math.round((max - min) * Math.random() + min);
// }

// console.log(randomBetween(1, 5));
// let str = 'As sly as a fox, as strong as an ox';
// let target = 'as';
// let pos = 0;
// let found;

// while ((found = str.indexOf(target, pos)) != -1) {
//   console.log(found);
//   pos = found + 1;
// }
// function ucFirst(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

// console.log(ucFirst(" vjkdh fkjdfh gjk"));

// function checkSpam(str) {
//   str = str.toLowerCase();
//   return (str.includes('viagra') || str.includes('xxx'))
// }

// console.log(checkSpam('sdfuhweujh'));









