// Q1. make a string out of an array
{
    const fruits = ["apple", "banana", "orange"];
    const result = fruits.join(); // default seperator : ","
    console.log(result);
}

// Q2. make an array out of a string
{
    const fruits = "🍎,🥝,🍌,🍒";
    const result = fruits.split(",");
    console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array); // 원래의 배열도 순서를 변화시킨다.
}

// 04. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);
    console.log(result);
    console.log(array);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student("A", 29, true, 45),
    new Student("B", 28, false, 80),
    new Student("C", 30, true, 90),
    new Student("D", 40, false, 66),
    new Student("E", 18, true, 88)
];

// Q5. find a student with the score 90
{
    // const result = students.find(function(student) {
    //     return student.score === 90;
    // });
    // 아래와 같이 arrow function 으로 작성 가능!
    const result = students.find((student) => student.score ===90);
    console.log(result);
}

// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled); // enrolled가 boolean이다.
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student) => student.score);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    const result = students.some((student) => student.score < 50);
    console.log(result);

    const result2 = !students.every((student) => student.scre >= 50);
    console.log(result2);

}

// Q9. compute students' average score
{
    // const result = students.reduce((prev, curr) => { // prev 는 0으로 초기화 되었고, curr 은 student 객체가 차례로 들어간다.
    //     console.log("---------------------");
    //     console.log(prev);
    //     console.log(curr);
    //     return prev + curr.score; //  return 값이 다음의 prev 가 된다.
    // }, 0); // initial value (sum을 위해)
    
    // 위를 간단하게
    const result = students.reduce((prev, curr) => prev + curr.score, 0);    
    console.log(result);    
    console.log(result / students.length);    
}

// Q10. make a string containing all the scores
// result should be: "45,80,90,66,88"
{
    const result = students
        .map((student) => student.score)
        .join();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45,66,80,88,90'
{
    const result = students
        .map((student) => student.score)
        .sort() // .sort((a, b) => a - b)
        .join();
    console.log(result);

    const result2 = students
        .map((student) => student.score)
        .sort((a, b) => b - a) // descending order
        .join();
    console.log(result2);
}

