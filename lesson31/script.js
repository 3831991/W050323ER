function login() {
    const obj = {
        userName: document.querySelector("#userName").value,
        password: document.querySelector("input[type=password]").value,
    };

    fetch("http://api.shipap.co.il/login", {
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
            // לכתוב הודעת ברוכים הבאים ליוזר
        } else {
            alert(data.message);
        }
    });
}

function loginStatus() {
    fetch("http://api.shipap.co.il/login", {
        credentials: 'include',
    })
    .then(res => res.json())
    .then(data => console.log(data))
}