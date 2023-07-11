import { useEffect, useState } from "react";
import Numbers from "./Numbers";
import Square from "./Square";
import moment from 'moment-with-locales-es6';

function Home() {
    const [time, setTime] = useState('');
    moment.locale('he');

    useEffect(() => {
        setInterval(() => {
            setTime(moment().format('LLLL'));
        }, 1000);
    }, []);

    return (
        <>
            <p style={{ textAlign: 'left' }}>{time}</p>
            <h2>ברוכים הבאים!</h2>
            <Numbers min={10} max={50} />
            <Numbers min={30} max={75} />
            <Numbers min={100} max={110} />

            <Square width={400} height={300} bg="blue" />
            <Square width={600} height={200} bg="green" />
            <Square width={800} height={500} bg="yellow" />
        </>
    );
}

export default Home;