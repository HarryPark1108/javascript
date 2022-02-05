// Shorthand property names
{
    const ellie1 = {
        name: "Ellie",
        age: "18"
    };

    const name = "Ellie";
    const age = "18";

    const ellie2 = {
        name: name,
        age: age
    };

    const ellie3 = { // key와 변수의 이름이 같으면 아래와 같이 축약해서 쓸 수 있다.
        name,
        age
    }

    console.log(ellie1, ellie2, ellie3);
}


// Destructuring Assignment
{
    // Object
    const student = {
        name: "Anna",
        level: 1
    };

    {
        const name = student.name;
        const level = student.level;
        console.log(name, level);
    }

    { // 이름이 같다면 위 표현을 아래와 같이 축약해서 쓸 수 있다.
        const {name, level} = student;
        console.log(name, level);

      // 이름이 다르다면 아래와 같이 쓸 수 있다.
        const {name: studentName, level: studentLevel} = student;
        console.log(studentName, studentLevel);
    }


    // Array
    const animals = ["🐶", "🐱"]

    {
        const first = animals[0];
        const second = animals[1];
        console.log(first, second);
    }

    { // 아래와 같이 쓸 수 있다.
        const [first, second] = animals;
        console.log(first, second);
    }
}


// Spread Syntax
{
    const obj1 = {key: "key1"};
    const obj2 = {key: "key2"};
    const array = [obj1, obj2];

    // array copy
    const arrayCopy = [...array]; // ... 로 ref 를 copy 한다.
    console.log(array, arrayCopy);

    const arrayCopy2 = [...array, {key: "key3"}]; // 새로운 요소를 추가하려면, 뒤에 obj를 추가로 넣어주면 된다.
    console.log(array, arrayCopy, arrayCopy2);

    obj1.key = "newKey";
    console.log(array, arrayCopy, arrayCopy2);

    // object copy
    const obj3 = {...obj1};
    console.log(obj3);

    // array concatenation
    const fruits1 = ["🍑", "🍓"];
    const fruits2 = ["🍌", "🥝"];
    const fruits = [...fruits1, ...fruits2]
    console.log(fruits);

    // object merge
    const dog1 = {dog1: "🐕"};
    const dog2 = {dog2: "🐶"};
    const dog = {...dog1, ...dog2};
    console.log(dog);
    // key이름이 같으면?
    const dog3 = {dog: "🐕"};
    const dog4 = {dog: "🐶"};
    const dog5 = {...dog3, ...dog4}; // 뒤에 오는 게 덮어 쓴다.
    console.log(dog5);
}


// Default Parameters
{
    {
        function printMessage(message) {
            console.log(message);
        }

        printMessage("hello");
        printMessage(); // undefined
    }

    {
        function printMessage(message = "default message") { // 
            console.log(message);
        }

        printMessage("hello");
        printMessage();  
        printMessage(undefined); 
        printMessage(null); // null 
    }
}


// Tenary Operator
{
    const isCat = true;

    {
        let component;
        if (isCat) {
            component = "🐱";
        } else {
            component = "🐶";
        }
        console.log(component);
    }

    {
        let component = isCat ? "🐱" : "🐶";
        console.log(component);
    }
}


// Temperate Literals
{
    const weather = "🌤";
    const temperature = "16°C";

    console.log(
        "Today's weather is " + weather + " and temperature is " + temperature + "."
    );

    console.log(
        `Today's weather is ${weather} and temperature is ${temperature}.`
    );
}


// Optional Chaining
{
    const person1 = {
        name: "ellie",
        job: {
            title: "S/W Engineer",
            manager: {
                name: "Bob"
            }
        }
    };

    const person2 = {
        name: "Bob"
    }

    {
        function printManager(person) {
            console.log(person.job.manager.name);
        }
        printManager(person1);
        // printManager(person2); // error
    }

    {
        function printManager(person) {
            console.log(person.job && person.job.manager && person.job.manager.name);
        }
        printManager(person1);
        printManager(person2);
    }

    {
        function printManager(person) {
            console.log(person.job?.manager?.name);
        }
        printManager(person1);
        printManager(person2);
    }    
}


// Nullish Coalescing Operator
{
    // Logical OR operator
    // false: false, "", 0, null, undefined
    // 하지만.. 사용할 때 주의하자!!!
    {
        const name = "Ellie";
        const userName = name || "Guest"; 
        console.log(userName);
    }

    {
        const name = null;
        const userName = name || "Guest"; 
        console.log(userName);
    }

    {
        const name = "";
        const userName = name || "Guest"; 
        console.log(userName);
    }

    {
        const num = 0;
        const message = num || "undefined"; 
        console.log(message);
    }

    { // ?? : null or undefined 일 때만
        const name = "";
        const userName = name ?? "Guest";
        console.log(userName);

        const num = 0;
        const message = num ?? "undefined";
        console.log(message);
    }
}