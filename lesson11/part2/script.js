let counter = 1;

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