function syncDataTable() {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";

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
}

syncDataTable();

/**
 * פונקציה שמופעלת בלחיצה על שם העמודה
 * @param sortBy פרמטר המייצג את שם המפתח למיון
 */
function miyun(sortBy) {
    // פונקציה מובנית למיון
    students.sort(function (a, b) {
        // מבצעים את ההשוואה לפי הפרמטר שקיבלנו
        if (a[sortBy] < b[sortBy]) return -1;
        if (a[sortBy] > b[sortBy]) return 1;
        return 0;
    });

    syncDataTable();
}