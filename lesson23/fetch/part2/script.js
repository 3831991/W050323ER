fetch("../students.json")
    .then(r => r.json())
    .then(students => {
        const elem = document.querySelector(".studentCards");

        students.forEach(s => {
            const div = document.createElement("div");

            div.innerHTML = `
                <h3>${s.firstName} ${s.lastName}</h3>
                <p><b>טלפון:</b> ${s.phone}</p>
                <p><b>אימייל:</b> ${s.email}</p>
                <p><b>תאריך לידה:</b> ${s.birthday}</p>
                <p><b>עיר:</b> ${s.city}</p>
            `;

            elem.appendChild(div);
        });
    });






document.querySelectorAll('header input[type=radio]').forEach(input => {
    input.addEventListener('change', ev => {
        // כולה בשביל העיצוב
        colorLabel(ev.target.parentElement);


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