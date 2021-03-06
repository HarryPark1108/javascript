'use strict';

// Array 

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["π", "π"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}
// c. forEach
fruits.forEach((fruit) => {console.log(fruit)})

// 4. Addition, delettion, copy
// add an item to the end
fruits.push("π", "π");
console.log(fruits);
// remove an item from the end
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);
// add an item to the beginning
fruits.unshift("π", "π");
console.log(fruits);
// remove an item from the beginning
fruits.shift();
console.log(fruits);
fruits.shift();
console.log(fruits);
// note!! shift, unshift are slower than pop, push
// remove an item by index position
fruits.push("π", "π₯­", "π");
console.log(fruits);
fruits.splice(1, 1); // start index, counts
console.log(fruits);
fruits.splice(1, 1, "π", "π"); // start index, counts, add
console.log(fruits);
// combine two arrays
const fruits2 = ["π«", "π₯"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Search
// indexOf : find the index
console.log(fruits);
console.log(fruits.indexOf("π"));
console.log(fruits.indexOf("π"));
console.log(fruits.indexOf("πΆ")); // -1
// includes
console.log(fruits.includes("π"));
console.log(fruits.includes("πΆ"));
// lastIndexOf
fruits.push("π");
console.log(fruits);
console.log(fruits.indexOf("π")); // λμΌν κ°μ΄ μ¬λ¬ κ° μμ κ²½μ° λ§¨ μ μμμ indexλ₯Ό λ³΄μ¬μ€λ€.
console.log(fruits.lastIndexOf("π"));

