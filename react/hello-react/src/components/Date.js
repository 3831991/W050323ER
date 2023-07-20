import { useEffect, useState } from "react";
import moment from 'moment-with-locales-es6';

function Date({ format }) {
    const [time, setTime] = useState('');
    moment.locale('he');

    useEffect(() => {
        setInterval(() => {
            setTime(moment().format(format || 'LLLL'));
        }, 1000);
    }, []);

    return <span>{time}</span>;
}

export default Date;