function login() {
    const obj = {
        userName: document.querySelector("#userName").value,
        password: document.querySelector("input[type=password]").value,
    };

    fetch("https://api.shipap.co.il/login", {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj),
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

function setUser(user) {
    const divLogin = document.querySelector(".login");
    const divUser = document.querySelector(".user");

    if (user) {
        divLogin.style.display = 'none';
        divUser.style.display = 'block';
        divUser.innerHTML = `${user.fullName} מחובר!`;
    } else {
        divLogin.style.display = 'block';
        divUser.style.display = 'none';
    }
}