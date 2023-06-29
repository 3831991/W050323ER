let i = 1;

function addTask() {
    const div = document.createElement('div');
    div.className = "task";

    const p = document.createElement('p');
    p.innerHTML = `Task ${i++}`;
    p.contentEditable = true;
    div.appendChild(p);

    // כפתור מחיקה
    const btnFrame = document.createElement("div");
    const btnRemove = document.createElement("button");
    btnRemove.className = "remove";
    btnRemove.innerHTML = "❌";
    btnRemove.addEventListener("click", () => div.remove());
    btnFrame.appendChild(btnRemove);
    div.appendChild(btnFrame);

    // כפתור בוצע
    const btnFrame2 = document.createElement("div");
    const btnComplete = document.createElement("button");
    btnComplete.className = "complete";
    btnComplete.innerHTML = "✔️";
    btnComplete.addEventListener("click", () => div.remove());
    btnFrame2.appendChild(btnComplete);
    div.appendChild(btnFrame2);


    document.querySelector('.taskList').appendChild(div);

    p.focus();
}

addTask();