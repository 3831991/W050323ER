const grades = [88, 96, 75, 100, 101, 95, 34, 45, 85];

function sum() {
    let res = 0;

    let i = 0;

    while (i < grades.length) {
        res += grades[i];

        i++;
    }

    document.getElementById("output1").innerHTML = res;
}

function showAsterisks() {
    let i = 0;

    while (i < 10) {
        document.getElementById("output2").innerHTML += "*" + "<br>";
        i++;
    }
}

function showNumbers() {
    let i = 1;

    while (i <= 15) {
        document.getElementById("output3").innerHTML += i + "<br>";
        i++;
    }
}

function showRange() {
    let i = 10;
    const arr = [];

    while (i <= 30) {
        arr.push(i);
        i++;
    }

    document.getElementById("output4").innerHTML = arr.join(", ");
}

function showSizeNumber() {
    let i = 1;

    while (i <= 100) {
        const span = `<span style="font-size: ${i}px">${i}, </span>`;
        document.getElementById("output5").innerHTML += span;
        i++;
    }
}