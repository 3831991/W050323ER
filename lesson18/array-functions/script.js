const numbers = [27,27,41,37,29,54,6,95,22,63,33,34,68,42,99,61,46,41,79,9,59,59,49,17,8,31,49,70,31,71];

// task 1
const names = students.slice(0, 20).map(s => s.firstName);
document.querySelector("#task1 p").innerHTML = names.join(", ");

// task 2
const names2 = students.slice(0, 20).map((s, i) => `${i + 1}. ${s.firstName}`);
document.querySelector("#task2 p").innerHTML = names2.join(", ");

// show numbers
document.querySelector("#numbers").innerHTML = numbers.join(" | ");

// task 3
document.querySelector("#task3 p").innerHTML = numbers.map(n => n * 2).join(" | ");