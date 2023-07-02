function login() {
    const obj = {
        userName: document.querySelector("#userName").value,
        password: document.querySelector("input[type=password]").value,
    };

    // שליחה לשרת
    fetch("https://api.shipap.co.il/login", {
        method: 'POST',
        credentials: 'include', // מאפשר שליחה וקבלה של עוגיות
        headers: {
            'Content-Type': 'application/json' // הגדרת סוג התוכן הנשלח לשרת
        },
        body: JSON.stringify(obj), // תוכן הקריאה לשרת
    })
    // קבלה מהשרת
    // *המרת התוכן לפי הצורך*
    .then(res => res.json())
    // התוכן שהתקבל מהשרת (לאחר טיפול של הפונקציה הקודמת)
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
        tbody.innerHTML = '';

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

function addProduct() {
    const name = document.querySelector('#name');
    const price = document.querySelector('#price');
    const discount = document.querySelector('#discount');

    const obj = {
        name: name.value,
        price: +price.value,
        discount: +discount.value,
    };

    name.value = '';
    price.value = '';
    discount.value = '';

    fetch("https://api.shipap.co.il/products", {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj),
    })
    .then(res => res.json())
    .then(data => {
        getProducts();
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