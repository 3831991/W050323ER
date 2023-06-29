let i = 1;

function addTask(parentDiv = null) {
    const div = document.createElement('div');
    div.className = "task";

    const p = document.createElement('p');
    p.innerHTML = `Task ${i++}`;
    p.contentEditable = true;
    div.appendChild(p);

    p.addEventListener("keydown", ev => {
        if (ev.key == 'Enter' && !ev.shiftKey) {
            ev.preventDefault();
        }
    });

    p.addEventListener("keyup", ev => {
        const task = ev.target.parentElement;

        if (ev.key == 'ArrowDown' && task.nextSibling) {
            task.nextSibling.querySelector("p").focus();
        } else if (ev.key == 'ArrowUp' && task.previousSibling) {
            task.previousSibling.querySelector("p").focus();
        } else if (ev.key == 'Enter' && !ev.shiftKey) {
            addTask(task);
        }
    });

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
    btnComplete.addEventListener("click", () => {
        document.querySelector('.complete .taskList').appendChild(div);
    });
    btnFrame2.appendChild(btnComplete);
    div.appendChild(btnFrame2);

    // כפתור ביטול
    const btnFrame3 = document.createElement("div");
    const btnUndo = document.createElement("button");
    btnUndo.className = "undo";
    btnUndo.innerHTML = "🙈";
    btnUndo.addEventListener("click", () => {
        document.querySelector('.taskList').appendChild(div);
    });
    btnFrame3.appendChild(btnUndo);
    div.appendChild(btnFrame3);

    if (parentDiv) {
        document.querySelector('.taskList').insertBefore(div, parentDiv.nextSibling);
    } else {
        document.querySelector('.taskList').appendChild(div);
    }

    p.focus();
}

addTask();