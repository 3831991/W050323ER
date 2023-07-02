function login() {
    const obj = {
        userName: document.querySelector("#userName").value,
        password: document.querySelector("input[type=password]").value,
    };

    fetch("https://api.shipap.co.il/login", {
        method: 'POST',
        credentials: 'include', // מאפשר שליחה וקבלה של עוגיות
        headers: {
            'Content-Type': 'application/json' // הגדרת סוג התוכן הנשלח לשרת
        },
        body: JSON.stringify(obj), // תוכן הקריאה לשרת
    })
    .then(res => res.json())
    .then(data => {
        if (data.status == 'success') {
            setUser(data.user);
        } else {
            alert(data.message);
        }
    });
}

// פונקציה הרצה בהפעלת האתר ובודקת האם היוזר מחובר
function loginStatus() {
    fetch("https://api.shipap.co.il/login", {
        credentials: 'include',
    })
    .then(res => res.json())
    .then(data => {
        if (data.status == 'success') {
            setUser(data.user);
        } else {
            setUser();
        }
    });
}

function getProducts() {
    fetch("https://api.shipap.co.il/products", {
        credentials: 'include',
    })
    .then(res => res.json())
    .then(data => {
        document.querySelector(".products").style.display = "block";
        const tbody = document.querySelector(".products tbody");

        data.forEach((p, i) => {
            const tr = document.createElement("tr");

            tr.innerHTML = `
                <td>${i + 1}</td>
                <td>${p.name}</td>
                <td>${p.price}</td>
                <td>${p.discount}</td>
                <td></td>
            `;

            tbody.appendChild(tr);
        });
    });
}

// פונקציה האחראית לשים את שם המשתמש בהודעה או לאפשר התחברות
function setUser(user = null) {
    const divLogin = document.querySelector(".login");
    const divUser = document.querySelector(".user");

    // אם יש יוזר, מציגה את שם היוזר ומסתירה את תיבת ההתחברות 
    if (user) {
        divLogin.style.display = 'none';
        divUser.style.display = 'block';
        divUser.innerHTML = `${user.fullName} מחובר!`;
        getProducts();
    } else {
        // אם אין יוזר, מציגה את תיבת ההתחברות
        divLogin.style.display = 'block';
        divUser.style.display = 'none';
    }
}