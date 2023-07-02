function login(userName, password) {
    fetch("http://api.shipap.co.il/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userName, password }),
    })
    .then(res => res.json())
    .then(data => console.log(data))
}