const styling = {
    backgroundColor: 'white',
    fontSize: '120px',
    padding: '16px',
    color: 'white',
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