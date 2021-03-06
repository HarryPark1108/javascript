// async & await
// clear style of using promise

// 1. async
function fetchUser() {
    return new Promise((resolve, reject) => {
        // do network request in 10 seconds
        resolve("ellie");    
    });
}

const user = fetchUser();
user.then(console.log);
console.log(user);

async function fetchUser2() {
    // do network request in 10 seconds
    return "ellie";    
}

const user2 = fetchUser2();
user2.then(console.log);
console.log(user2);

// 2. await
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(3000);
    return "๐";
}

async function getBanana() {
    await delay(2000);
    return "๐";
}

//function pickFruits() {
//   return getApple()
//        .then((apple) => {
//            return getBanana().then((banana) => `${apple} + ${banana}`);
//        });
//}

// async๋ก ๋ง๋ค์
async function pickFruits() {
    const applePromise = getApple(); // ๋ณ๋ ฌ์ ์ผ๋ก ์คํ๋๋๋ก promise๋ฅผ ๋จผ์  ๋ง๋ค์ด์ ์คํ๋๊ฒ ํ๋ค.
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}
pickFruits().then(console.log)

// 3. Useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
        .then((fruits) => fruits.join(" + "));
}
pickAllFruits().then(console.log)

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log)