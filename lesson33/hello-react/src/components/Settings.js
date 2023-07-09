import { useState } from "react";
import './Settings.css';

function Settings() {
    const [brightness, setBrightness] = useState(100);

    function changeBrightness(val) {
        setBrightness(val);
        document.querySelector('html').style.filter = `brightness(${val}%)`;
    }

    return (
        <>
            <div className="card">
                <b>רמת בהירות:</b>
                <input type="range" min="0" max="100" value={brightness} onChange={ev => changeBrightness(ev.target.value)} />
                <input type="number" min="0" max="100" value={brightness} onChange={ev => changeBrightness(ev.target.value)} />
            </div>

            <div className="card">
                
            </div>
        </>
    );
}

export default Settings;