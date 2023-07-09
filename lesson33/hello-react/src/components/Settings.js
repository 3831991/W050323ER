import { useState } from "react";
import './Settings.css';

function Settings() {
    const [brightness, setBrightness] = useState(100);

    return (
        <>
            <div className="card">
                <b>רמת בהירות:</b>
                <input type="range" min="0" max="100" value={brightness} onChange={ev => setBrightness(ev.target.value)} />
                <input type="number" min="0" max="100" value={brightness} onChange={ev => setBrightness(ev.target.value)} />
            </div>

            <div className="card">
                
            </div>
        </>
    );
}

export default Settings;