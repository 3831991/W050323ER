function imageChange(ev) {
    const file = ev.target.files[0];
    const allowed = ['image/jpg', 'image/jpeg', 'image/png'];

    if (!allowed.includes(file.type)) {
        alert("קובץ לא מורשה");
        return;
    }

    const reader = new FileReader();

    reader.onload = e => {
        const img = document.querySelector('img');
        img.src = e.target.result;
        img.style.display = 'block';
    }

    reader.readAsDataURL(file);
}

function uploadImage(ev) {
    const data = new FormData();
    data.append('myFile', ev.target.files[0]);

    fetch('http://localhost:421/files/upload', {
        method: 'POST',
        body: data,
    })
    .then(() => getAllImages());
}

function getAllImages() {
    fetch("http://localhost:421/files")
    .then(res => res.json())
    .then(files => {
        document.querySelectorAll(".mySlides").forEach(el => el.remove());

        files.forEach(x => {
            const img = document.createElement('img');
            img.src = `http://localhost:421/file/${x}`;
            img.className = 'mySlides';
            img.style.width = '100%';
            document.querySelector('.gallery').appendChild(img);
            showDivs(slideIndex);
        });
    });
}

function remove() {
    const images = document.querySelectorAll(".mySlides");
    const file = images[slideIndex - 1];
    const fileName = file.src.split('/').pop();

    fetch(`http://localhost:421/files/${fileName}`, {
        method: 'DELETE',
    })
    .then(() => file.remove());
}

let slideIndex = 1;

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    const images = document.querySelectorAll(".mySlides");

    if (n > images.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = images.length;
    }

    images.forEach(img => img.style.display = "none");
    images[slideIndex - 1].style.display = "block";
}