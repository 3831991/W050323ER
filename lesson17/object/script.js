const tbody = document.querySelector("tbody");

for (let i = 0; i < students.length; i++) {
    const student = students[i];

    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${student.id}</td>
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.city}</td>
        <td>${student.phone}</td>
        <td>${student.email}</td>
    `;
    tbody.appendChild(tr);
}

document.querySelector("th").addEventListener("click", function (ev) {
    const id = ev.target.id;

    
});