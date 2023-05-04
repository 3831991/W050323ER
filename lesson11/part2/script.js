let counter = 1;
let counter2 = 1;

function task1() {
    document.getElementById("btn").innerHTML = ++counter;
}

function task2() {
    const answer = document.getElementById("answer1").value;

    if (answer == "צהוב") {
        document.getElementById("output1").innerHTML = "נכון";
    } else {
        document.getElementById("output1").innerHTML = "תתבייש!!!!";
    }
}

function task3() {
    const city = document.getElementById("city").value;

    if (city == "קרית ארבע") {
        document.getElementById("output2").innerHTML = "נכון";
        document.getElementById("city").style.border = "3px solid green";
    } else {
        document.getElementById("output2").innerHTML = "שקר וכזב";
        document.getElementById("city").style.border = "3px solid red";
    }
}

function task4() {
    document.getElementById("img1").style.display = 'none';
    document.getElementById("img2").style.display = 'block';
}

function task4_b() {
    document.getElementById("img1").style.display = 'block';
    document.getElementById("img2").style.display = 'none';
}

function task5() {
    counter2++;
    const font = counter2 * 10;
    const color = counter2 * 40;

    document.getElementById("btn2").innerHTML = counter2;
    document.getElementById("btn2").style.fontSize = `${font}px`;
    document.getElementById("btn2").style.backgroundColor = `hsl(${color} 100% 38%)`;
}