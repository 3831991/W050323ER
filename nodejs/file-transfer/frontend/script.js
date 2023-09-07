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

function getAllImages() {
    fetch("http://localhost:421/files")
    .then(res => res.json())
    .then(files => {
        files.forEach(x => {
            const img = document.createElement('img');
            img.src = `http://localhost:421/file/${x}`;
            document.querySelector('.gallery').appendChild(img);
        });
    });
}