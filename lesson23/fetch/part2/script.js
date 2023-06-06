let students = [];

fetch("../students.json")
    .then(r => r.json())
    .then(data => {
        students = data;
        showStudents('cards');
    });


function showStudents(displayType) {
    const elem = document.querySelector(".students");
    elem.innerHTML = "";

    if (displayType === 'table') {
        const table = document.createElement("table");

        const tr = document.createElement("tr");

        tr.innerHTML = `
            <th>שם פרטי</th>
            <th>שם משפחה</th>
            <th>טלפון</th>
            <th>אימייל</th>
            <th>תאריך לידה</th>
            <th>עיר</th>
        `;

        table.appendChild(tr);

        students.forEach(s => {
            const tr = document.createElement("tr");

            tr.innerHTML = `
                <td>${s.firstName}</td>
                <td>${s.lastName}</td>
                <td>${s.phone}</td>
                <td>${s.email}</td>
                <td>${s.birthday}</td>
                <td>${s.city}</td>
            `;

            table.appendChild(tr);
        });

        elem.appendChild(table);
    } else if (displayType === 'cards') {
        const studentCards = document.createElement("div");
        studentCards.className = 'studentCards';

        students.forEach(s => {
            const div = document.createElement("div");

            div.innerHTML = `
                <h3>${s.firstName} ${s.lastName}</h3>
                <p><b>טלפון:</b> ${s.phone}</p>
                <p><b>אימייל:</b> ${s.email}</p>
                <p><b>תאריך לידה:</b> ${s.birthday}</p>
                <p><b>עיר:</b> ${s.city}</p>
            `;

            studentCards.appendChild(div);
        });

        elem.appendChild(studentCards);
    } else if (displayType === 'list') {
        const ul = document.createElement("ul");

        students.forEach(s => {
            const li = document.createElement("li");
            li.innerHTML = `${s.firstName} ${s.lastName}`;

            ul.appendChild(li);
        });

        elem.appendChild(ul);
    }
}

document.querySelectorAll('header input[type=radio]').forEach(input => {
    input.addEventListener('change', ev => {
        // כולה בשביל העיצוב
        colorLabel(ev.target.parentElement);

        showStudents(ev.target.value);
    });
});

/**
 * פונקציה שגלב ביקש, היא בסה"כ עושה עיצוב
 */
function colorLabel(labelElem) {
    document.querySelectorAll('header label').forEach(label => {
        label.className = '';
    });

    labelElem.className = "active";
}