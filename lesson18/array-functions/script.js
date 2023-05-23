// task 1
const names = students.map(s => s.firstName);
document.querySelector("#task1 p").innerHTML = names.join(", ");