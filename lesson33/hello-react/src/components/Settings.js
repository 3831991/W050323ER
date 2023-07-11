import { useState } from "react";
import './Settings.css';
import Range from "./Range";

function Settings() {
    const [brightness, setBrightness] = useState(30);
    const [letterSpacing, letterChange] = useState(10);

    function changeBrightness(val) {
        setBrightness(val);
        document.querySelector('html').style.filter = `brightness(${val}%)`;
    }

    return (
        <>
            <div className="card">
                <Range 
                    title="בהירות"
                    value={brightness}
                    min={10}
                    max={100}
                    change={val => changeBrightness(val)}
                />
            </div>

            <div className="card">
                <Range 
                    title="ריווח בין תווים"
                    value={letterSpacing}
                    min={10}
                    max={50}
                    change={val => changeBrightness(val)}
                />
            </div>
        </>
    );
}

export default Settings;