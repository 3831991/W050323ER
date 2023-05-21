const elem = document.querySelector('.row');

// for (let i = 0; i < students.length; i++) {
//     const student = students[i];

// }

for (const student of students) {
    elem.innerHTML += `
        <div class="col-sm-4">
            <div class="card">
                <div class="card-body">
                    <h3>${student.firstName} ${student.lastName}</h3>
                    <p>${student.phone}</p>
                    <p>${student.email}</p>
                </div>
            </div>
        </div>
    `;
}