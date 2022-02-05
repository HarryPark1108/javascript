"use strict";

// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instance of Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {}; // "object literal" syntax
const obj2 = new Object(); // "object constructor" syntax

const name = "ellie";
const age = 20;

function print1(name, age) {
    console.log(name);
    console.log(age);
}
print1(name, age);

const ellie = {name: "ellie", age: 20};
function print2(person){
    console.log(person.name);
    console.log(person.age);
}
print2(ellie);

// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties
// key should be always string
console.log(ellie.name);
console.log(ellie["name"]);
ellie["hasJob"] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
    console.log(obj.key); // undefined
    console.log(obj[key]);
}
printValue(ellie, "name");

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 }
const person2 = { name: "steve", age: 3 }
const person3 = { name: "dave", age: 4 }
function makePerson(name, age) {
    return {  // variable과 value가 같으면 아래와 같이...
        name, // name = name,
        age   // age = age,
    };
}
const person4 = makePerson("ellie", 20);
console.log(person4)

// 4. Constructor function
function Person(name, age) {
    // this = {}; // 생략된 것
    this.name = name;
    this.age = age;
    // return this; // 생략된 것
}
const person5 = new Person("ellie", 20);
console.log(person5);

// 5. "in" operator: property existance check (key in obj)
console.log("name" in ellie);
console.log("age" in ellie);
console.log("random" in ellie);
console.log(ellie.random);

// 6. for ... in vs for ... of
// for (key in obj)
for (let key in ellie) {
    console.log(key);
}
// for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (let value of array) {
    console.log(value);
}

// 7. Fun Cloning
// Object.assign(dest, [obj1, obj2, obj3, ...])
const user1 = { name : "ellie", age: "20" };
const user2 = user1;
user2.name = "coder";
console.log(user1);

// copy - old way
const user3 = {};
for (let key in user1) {
    user3[key] = user1[key]
}
console.log(user3);

// copy - new way
const user4 = {};
Object.assign(user4, user1);
console.log(user4);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);