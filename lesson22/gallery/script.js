/**
 * מחלקה ליצירת גלרייה
 * @param elemId מקבל את המזהה שבו נשים את הגלרייה
 * @param images שמות של תמונות שיוצגו בגלרייה
 */
class Gallery {
    constructor(elemId, ...images) {
        // שם את שמות התמונות שקיבלנו בתוך המחלקה
        this.images = images;
        // חיבור לאלמנט של הגלרייה (לפי שם המזהה שקיבלנו)
        const galleryElem = document.getElementById(elemId);

        // מייצר אלמנט של תמונה
        this.imgElem = document.createElement('img');
        // נרשם לאירועים שיפעילו את הגלרייה
        // (בלחיצה על העכבר הגלרייה תתקדם)
        this.imgElem.addEventListener('click', () => this.nextImage());
        // (בלחיצה על המקש הימני בעכבר הגלרייה תלך אחורה)
        this.imgElem.addEventListener('contextmenu', ev => {
            // מבטל את הפתיחת התפריט בלחיצה על הלחצן הימני
            ev.preventDefault();
            this.prevImage();
        });

        // מוסיף את התמונה לתוך האלמנט המבוקש
        galleryElem.appendChild(this.imgElem);
        // מפעיל את הגלרייה בפעם הראשונה (ע"מ שתוצג תמונה)
        this.nextImage();
    }

    // האלמנט של התמונה
    imgElem;
    // מערך של כל שמות התמונות
    images = [];
    // מיקום הגלרייה (איזו תמונה להציג)
    currentImage = -1;

    // מעבר לתמונה הבאה
    nextImage() {
        // מקדם את המיקום ב-1
        this.currentImage++;
    
        // אם מיקום התמונה גדול או שווה לאורך המערך, מחזירים את המיקום ל-0 (מתחילים מהתחלה)
        if (this.currentImage >= this.images.length) {
            this.currentImage = 0;
        }
    
        // מחליפים את התמונה בגלרייה לפי המיקום החדש
        this.imgElem.src = `images/${this.images[this.currentImage]}`;
    }

    prevImage() {
        // מפחיתים את המיקום ב-1
        this.currentImage--;
    
        // אם המיקום קטן מ-0 מחזירים את המיקום לסוף המערך (פחות 1)
        if (this.currentImage < 0) {
            this.currentImage = this.images.length - 1;
        }

        // מחליפים את התמונה בגלרייה לפי המיקום החדש
        this.imgElem.src = `images/${this.images[this.currentImage]}`;
    }
}

// יצרנו 3 גלריות באמצעות הקלאס של הגלרייה
const gallery1 = new Gallery("gallery1", "תמונה (1).jpg", "תמונה (2).jpg", "תמונה (3).jpg", "תמונה (4).jpg", "תמונה (5).jpg");
const gallery2 = new Gallery("gallery2", "תמונה (11).jpg", "תמונה (12).jpg", "תמונה (13).jpg", "תמונה (14).jpg", "תמונה (15).jpg", "תמונה (16).jpg", "תמונה (17).jpg");
const gallery3 = new Gallery("gallery3", "תמונה (6).jpg", "תמונה (7).jpg", "תמונה (8).jpg", "תמונה (9).jpg", "תמונה (10).jpg");

// פונקציה חיצונית שיודעת להשתמש בגלריות שהוגדרו ולעבור לתמונה הבאה
function nextAll() {
    gallery1.nextImage();
    gallery2.nextImage();
    gallery3.nextImage();
}