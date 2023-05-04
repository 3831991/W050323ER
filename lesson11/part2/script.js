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