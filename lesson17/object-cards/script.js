const elem = document.querySelector('.row');

// for (let i = 0; i < students.length; i++) {
//     const student = students[i];

// }

for (const student of students) {
    elem.innerHTML += `
        <div class="col-sm-4 p-2 cardFrame">
            <div class="card">
                <div class="card-body">
                    <h3>${student.firstName} ${student.lastName}</h3>
                    <p>${student.phone}</p>
                    <p>${student.email}</p>
                    <button class="btn btn-danger" onclick="remove(this)">מחק</button>
                </div>
            </div>
        </div>
    `;
}

function remove(element) {
    while (!element.className.includes('cardFrame') && element) {
        element = element.parentElement;
    }

    element.remove();
}