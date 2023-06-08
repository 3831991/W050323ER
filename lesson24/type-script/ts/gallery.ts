class Gallery {
    currentIndex: number = -1;
    imageElem: HTMLImageElement;

    constructor(private galleryId: string, private images: string[]) {
        this.imageElem = document.createElement("img");
        const elem = document.getElementById(this.galleryId);
        elem?.addEventListener("click", () => this.nextImage());
        elem?.appendChild(this.imageElem);

        this.nextImage();
    }

    nextImage() {
        this.currentIndex++;

        if (this.currentIndex >= this.images.length) {
            this.currentIndex = 0;
        }

        this.imageElem.src = "../images/" + this.images[this.currentIndex];
    }
}

const gallery1 = new Gallery("g1", ["אוכל (1).jpg", "אוכל (2).jpg", "אוכל (3).jpg", "אוכל (4).jpg"]);
const gallery2 = new Gallery("g2", ["אוכל (5).jpg", "אוכל (6).jpg", "אוכל (7).jpg", "אוכל (8).jpg", "אוכל (9).jpg"]);