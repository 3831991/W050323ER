function task1() {
    const elem = document.getElementById("num1");
    const num = +elem.value;
    let color = "gray";

    if (num <= 40) {
        color = "red";
    } else if (num <= 60) {
        color = "orange";
    } else if (num <= 80) {
        color = "blue";
    } else if (num <= 100) {
        color = "green";
    }

    elem.style.backgroundColor = color;
}

function task2() {
    const str1 = document.getElementById("str1").value;
    const str2 = document.getElementById("str2").value;

    document.getElementById("str1").value = str2;
    document.getElementById("str2").value = str1;
}