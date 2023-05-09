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
    
}