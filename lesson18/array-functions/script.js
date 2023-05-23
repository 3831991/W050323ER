const numbers = [27,27,41,37,29,54,6,95,22,63,33,34,68,42,99,61,46,41,79,9,59,59,49,17,8,31,49,70,31,71];

// task 1
const names = students.slice(0, 20).map(s => s.firstName);
document.querySelector("#task1 p").innerHTML = names.join(", ");

// task 2
const names2 = students.slice(0, 20).map((s, i) => `${i + 1}. ${s.firstName}`);
document.querySelector("#task2 p").innerHTML = names2.join(", ");

// show numbers
document.querySelector("#numbers div").innerHTML = numbers.join(" | ");

// task 3
document.querySelector("#task3 p").innerHTML = numbers.map(n => n * 2).join(" | ");

// task 4
document.querySelector("#task4 p").innerHTML = numbers.filter(n => n > 40).join(" | ");

// task 5
document.querySelector("#task5 p").innerHTML = numbers.filter(n => n >= 20 && n <= 50).join(" | ");

// task 6
document.querySelector("#task6 input").addEventListener("input", ev => {
    const word = ev.target.value;
    const len = students.filter(s => s.firstName.includes(word) || s.lastName.includes(word)).length;
    document.querySelector("#task6 p").innerHTML = word ? len : '';
});