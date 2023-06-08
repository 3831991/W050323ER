fetch("person.json")
    .then(r => r.json())
    .then(d => createTable(d));


function createTable(data: Person[]) {
    const grid = document.querySelector(".grid");

    if (grid) {
        for (const k in data[0]) {
            const div = document.createElement("div");
            div.innerHTML = k;
            grid.appendChild(div);
        }
    }

    data.forEach(item => {
        if (grid) {
            for (const k in item) {
                const div = document.createElement("div");
                div.innerHTML = item[k];
                grid.appendChild(div);
            }
        }
    });
}

interface Person {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    birthday: string;
    gradesAvg: number;
}