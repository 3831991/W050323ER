const styling = {
    backgroundColor: 'white',
    fontSize: '30px',
    padding: '16px',
    color: 'black',
};

function syncStyle() {
    const page = document.querySelector(".page");

    for (const s in styling) {
        page.style[s] = styling[s];
    }
}

function changeStyle(key, value) {
    styling[key] = value;
    syncStyle();
}