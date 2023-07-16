import './Contact.css';

export default function Contact() {
    return (
        <div className="Contact">
            <h2>טופס יצירת קשר</h2>

            <form>
                <label>
                    שם מלא:
                    <input type="text" />
                </label>

                <label>
                    טלפון:
                    <input type="text" />
                </label>

                <label>
                    אימייל:
                    <input type="text" />
                </label>

                <label>
                    הודעה:
                    <textarea></textarea>
                </label>

                <button>שלח</button>
            </form>
        </div>
    )
}