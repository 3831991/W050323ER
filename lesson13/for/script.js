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

function avg() {
    let res = 0;

    for (let i = 0; i < grades.length; i++) {
        res += grades[i];
    }

    const average = res / grades.length;
    document.getElementById("output6").innerHTML = Math.round(average);
}

function colors() {
    for (let i = 0; i < 30; i++) {
        const div = `<div style="background-color: hsl(${i * 30} 50% 52%); height: 20px;"></div>`;
        document.getElementById("output7").innerHTML += div;
    }
}

function showSpecialAsterisks() {
    for (let i = 1; i <= 10; i++) {

        for (let x = 0; x < i; x++) {
            document.getElementById("output8").innerHTML += "*";
        }

        document.getElementById("output8").innerHTML += "<br>";
    }
}

function showSpecialAsterisks10() {
    for (let i = 1; i <= 10; i++) {

        for (let x = 1; x <= 10; x++) {
            document.getElementById("output9").innerHTML += "*";
        }

        document.getElementById("output9").innerHTML += "<br>";
    }
}

function multiBoard() {
    let str = "";

    for (let i = 1; i <= 10; i++) {

        str += "<tr>";

        for (let x = 1; x <= 10; x++) {
            str += `<td>${i * x}</td>`;
        }

        str += "</tr>";
    }

    document.getElementById("board").innerHTML = str;
}
