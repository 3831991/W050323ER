const elem = document.querySelector(".board");
let isX = true;

for (let i = 0; i < 9; i++) {
    const div = document.createElement("div");

    div.addEventListener("click", ev => {
        const clickedDiv = ev.target;

        if (!clickedDiv.innerHTML) {
            if (isX) {
                clickedDiv.innerHTML = "X";
            } else {
                clickedDiv.innerHTML = "O"
            }

            clickedDiv.className = 'dirty';
            isX = !isX;
        }
    })

    elem.appendChild(div);
}