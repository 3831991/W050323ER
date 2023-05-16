const days = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];
const months = ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"];
let isDots = true;

function showDate() {
    const d = new Date();

    const day = d.getDay();

    let date = d.getDate();
    let month = d.getMonth() + 1;
    const year = d.getFullYear();

    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

    if (date < 10) {
        date = '0' + date;
    }

    if (month < 10) {
        month = '0' + month;
    }

    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    document.querySelector("#date").innerHTML = `${date}/${month}/${year}`;
    document.querySelector("#day").innerHTML = `יום ${days[day]} | ${date} ב${months[month - 1]}`;

    if (isDots) {
        document.querySelector("#time").innerHTML = `${hours}:${minutes}:${seconds}`;
    } else {
        document.querySelector("#time").innerHTML = `${hours} ${minutes} ${seconds}`;
    }

    isDots = !isDots;
}

setInterval(showDate, 1000);