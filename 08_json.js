// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(object)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabbit = {
    name: "tori",
    color: "white",
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    },
};
// function은 JSON에 포함되지 않는다!!!
// 마지막에 comma를 남겨둬야 하나?

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "color"]); // 원하는 properties만 JOSN으로 변환 가능!!
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === "name" ? "ellie" : value;
});
console.log(json);

// 2. JSON to Object
// parse(JSON)
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
// obj.jump(); // error

console.log(rabbit.birthDate.getDate())
// console.log(obj.birthDate.getDate()) // error. why? string!!

const obj2 = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === "birthDate" ? new Date(value) : value;
})
console.log(obj2.birthDate.getDate())