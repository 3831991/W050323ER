import { useState } from "react";
import './Settings.css';
import Range from "./Range";

function Settings() {
    const [brightness, setBrightness] = useState(30);
    const [letterSpacing, setLetterSpacing] = useState(10);
    const [fontSize, setFontSize] = useState(20);
    const [padding, setPadding] = useState(5);
    const [invertColor, setInvertColor] = useState(5);

    function changeBrightness(val) {
        setBrightness(val);
        document.querySelector('html').style.filter = `brightness(${brightness}%) invert(${invertColor}%)`;
    }

    function changeLetterSpacing(val) {
        setLetterSpacing(val);
        document.body.style.letterSpacing = `${letterSpacing}px`;
    }

    function changeFontSize(val) {
        setFontSize(val);
        document.body.style.fontSize = `${fontSize}px`;
    }

    function changePadding(val) {
        setPadding(val);
        document.body.style.padding = `${padding}px`;
    }

    function changeInvertColor(val) {
        setInvertColor(val);
        document.querySelector('html').style.filter = `brightness(${brightness}%) invert(${invertColor}%)`;
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
                    min={0}
                    max={10}
                    change={val => changeLetterSpacing(val)}
                />
            </div>

            <div className="card">
                <Range 
                    title="גודל הגופן"
                    value={fontSize}
                    min={10}
                    max={70}
                    change={val => changeFontSize(val)}
                />
            </div>

            <div className="card">
                <Range 
                    title="ריווח של הדף"
                    value={padding}
                    min={0}
                    max={60}
                    change={val => changePadding(val)}
                />
            </div>

            <div className="card">
                <Range 
                    title="היפוך צבעים"
                    value={invertColor}
                    min={0}
                    max={100}
                    change={val => changeInvertColor(val)}
                />
            </div>
        </>
    );
}

export default Settings;