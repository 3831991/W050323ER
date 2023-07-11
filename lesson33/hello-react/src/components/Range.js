import { useState } from "react";
import './Range.css';

function Range({ title, value, min, max, change }) {
    const [num, setNum] = useState(value);

    function changeVal(val) {
        setNum(val);

        if (typeof change === 'function') {
            change(val);
        }
    }

    return (
        <div className="range">
            {title ? (<b>{title}:</b>) : ''}

            <input type="range" min={min} max={max} value={num} onChange={ev => changeVal(ev.target.value)} />
            <input type="number" min={min} max={max} value={num} onChange={ev => changeVal(ev.target.value)} />
        </div>
    );
}

export default Range;