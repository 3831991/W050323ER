function welcome() {
    alert("ברוכים הבאים");
    console.log("Welcome to the site");
}

function welcome2() {
    const userName = document.getElementById("userName").value;
    alert("ברוך הבא ל" + userName);
}

function multi50() {
    const n = document.getElementById("num1").value;

    alert(n * 50);
}