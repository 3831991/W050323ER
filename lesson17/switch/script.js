const span1 = document.querySelector("#task1 span");
span1.style.marginRight = "12px";

document.querySelector("#task1 input").addEventListener("input", function(ev) {
    const num = +ev.target.value;

    switch (num) {
        case 1: span1.innerHTML = "ינואר"; break;
        case 2: span1.innerHTML = "פברואר"; break;
        case 3: span1.innerHTML = "מרץ"; break;
        case 4: span1.innerHTML = "אפריל"; break;
        case 5: span1.innerHTML = "מאי"; break;
        case 6: span1.innerHTML = "יוני"; break;
        case 7: span1.innerHTML = "יולי"; break;
        case 8: span1.innerHTML = "אוגוסט"; break;
        case 9: span1.innerHTML = "ספטמבר"; break;
        case 10: span1.innerHTML = "אוקטובר"; break;
        case 11: span1.innerHTML = "נובמבר"; break;
        case 12: span1.innerHTML = "דצמבר"; break;
    }
});

document.querySelector("#task2 input").addEventListener("input", function(ev) {

});