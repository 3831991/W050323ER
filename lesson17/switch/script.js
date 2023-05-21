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

const span2 = document.querySelector("#task2 span");

document.querySelector("#task2 input").addEventListener("input", function(ev) {
    const num = +ev.target.value;

    switch (num) {
        case 0: span2.innerHTML = "אפס"; break;
        case 1: span2.innerHTML = "אחד"; break;
        case 2: span2.innerHTML = "שתיים"; break;
        case 3: span2.innerHTML = "שלוש"; break;
        case 4: span2.innerHTML = "ארבע"; break;
        case 5: span2.innerHTML = "חמש"; break;
        case 6: span2.innerHTML = "שש"; break;
        case 7: span2.innerHTML = "שבע"; break;
        case 8: span2.innerHTML = "שמונה"; break;
        case 9: span2.innerHTML = "תשע"; break;
        case 10: span2.innerHTML = "עשר"; break;
        case 11: span2.innerHTML = "אחד עשרה"; break;
        case 12: span2.innerHTML = "שתים עשרה"; break;
        case 13: span2.innerHTML = "שלוש עשרה"; break;
        case 14: span2.innerHTML = "ארבע עשרה"; break;
        case 15: span2.innerHTML = "חמש עשרה"; break;
        default: span2.innerHTML = "לא יודע";
    }
});