'use strict';

// 1. String concatenation
console.log("my" + " cat");
console.log("1" + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`)

// 2. Numeric operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);

// 3. Increment and decrement operators
let counter = 2;

const preIncrement = ++counter;
// counter = counter + 1;
// const preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`)

const postIncrement = counter++;
// const postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`)

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`)
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`)

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y
x -= y; // x = x - y
x *= y; // x = x * y
x /= y; // x = x / y

// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical operators
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
function check() {
    for (let i = 0; i < 10; i++) {
        // wasting time
        console.log("lol")
    }
    return true
}
console.log(`or: ${value1 || value2 || check()}`);
const value3 = true;
console.log(`or: ${value3 || value2 || check()}`); // check() 함수가 실행되지 않는다.

// && (and), finds the first false value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullalbleObject.something
// if (nullableObject != null) {
//    nullableObject.something;
//}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = "5";
const numberFive = 5;
// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);
// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);
// object equality by reference
const ellie1 = { name: "ellie" }; // ellie1 -> ref1 -- name -> ellie
const ellie2 = { name: "ellie" }; // ellie2 -> ref2 -- name -> ellie
const ellie3 = ellie1;            // ellie3 -> ref1
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);
// equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log("" == false);
console.log("" === false);
console.log(null == undefined);
console.log(null === undefined);

// 8. Conditional operators: if
// if, else if, else
const myName = "ellie";
if (myName === "ellie") {
    console.log("Welcome, Ellie!");
} else if (myName == "coder") {
    console.log("You are an amazing coder!");
} else {
    console.log("Unknown.")
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(myName === "ellie" ? "Yes" : "No");

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = "IE";
switch (browser) {
    case "IE":
        console.log("Go away!")
        break;
    case "Chrome":
        //console.log("Love you!")
        //break;
    case "Firefox":
        console.log("Love you!") // Chrome과 Firefox가 동일한 결과를 출력하므로 묶어서 표현 가능하다.
        break;    
    default:
        console.log("Same you!")
        break;
}

// 11. Loops
// while loop, while the condition is truthy
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}
// do while loop, body code is executed first.
// then check the condition.
do {
    console.log(`do while: ${i}`)
    i--;
} while (i > 0)
// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`)
}

for (let i = 3; i > 0; i = i -2) {
    console.log(`inline variable for: ${i}`)
}
// nested loops
for(let i = 0; i < 4 ; i++) {
    for(let j = 0; j < 4 ; j++) {
        console.log(`i: ${i}, j: ${j}`)
    }
}
// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for(let i = 0; i < 11; i++) {
    if (i % 2 != 0) {
        continue;
    } else{
        console.log(`i: ${i}`);
    }
}
// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for(let i = 0; i < 11; i++) {
    if (i > 8) {
        break;
    } else{
        console.log(`i: ${i}`);
    }
}