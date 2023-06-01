const tasks = [
    "משימה 1",
    "משימה 2",
];

function showTasks() {
    const list = document.querySelector('#list');
    list.innerHTML = tasks.map(t => `<li>${t}</li>`).join('');
}

function addTask() {
    const input = document.querySelector('input');
    tasks.push(input.value);
    input.value = '';
    showTasks();
}

function removeTask() {

}

// הפעלת הפונקציה באופן ראשוני
showTasks();