class Gallery {
    // אינדקס של התמונה המוצגת
    currentIndex: number = -1;
    // אלמנט של תמונה שנוסיף אותו לגלרייה
    imageElem: HTMLImageElement = document.createElement("img");

    constructor(private galleryId: string, private images: string[]) {
        // מתחבר לאלמנט של הגלרייה
        const elem = document.getElementById(this.galleryId);
        // מוסיף אירוע שמעביר תמונה
        elem?.addEventListener("click", () => this.nextImage());
        // מוסיף את התמונה לתוך האלמנט
        elem?.appendChild(this.imageElem);
        // מפעיל את הפונקציה המציגה את התמונה הבאה (לצורך הצגת התמונה הראשונה)
        this.nextImage();
    }

    nextImage() {
        this.currentIndex++;

        // אם האינדקס של התמונה גדול מאורך המערך, אנחנו מחזירים את האינדקס ל-0
        if (this.currentIndex >= this.images.length) {
            this.currentIndex = 0;
        }

        // משנים את הקישור של התמונה (מעבר לתמונה הבאה)
        this.imageElem.src = "../images/" + this.images[this.currentIndex];
    }
}

// שימוש במחלקה
const gallery1 = new Gallery("g1", ["אוכל (1).jpg", "אוכל (2).jpg", "אוכל (3).jpg", "אוכל (4).jpg"]);
const gallery2 = new Gallery("g2", ["אוכל (5).jpg", "אוכל (6).jpg", "אוכל (7).jpg", "אוכל (8).jpg", "אוכל (9).jpg"]);