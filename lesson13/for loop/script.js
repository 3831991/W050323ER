const grades = [88, 96, 75, 100, 101, 95, 34, 45, 85];

function sum() {
    let res = 0;

    for (let i = 0; i < grades.length; i++) {
        res += grades[i];
    }

    document.getElementById("output1").innerHTML = res;
}

function showAsterisks() {
    for (let i = 0; i < 10; i++) {
        document.getElementById("output2").innerHTML += "*" + "<br>";
    }
}

function showNumbers() {
    for (let i = 1; i <= 15; i++) {
        document.getElementById("output3").innerHTML += i + "<br>";
    }
}

function showRange() {
    const arr = [];

    for (let i = 10; i <= 30; i++) {
        arr.push(i);
    }

    document.getElementById("output4").innerHTML = arr.join(", ");
}

function showSizeNumber() {
    for (let i = 1; i <= 100; i++) {
        const span = `<span style="font-size: ${i}px">${i}, </span>`;
        document.getElementById("output5").innerHTML += span;
    }
}