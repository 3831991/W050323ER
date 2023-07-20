import { useEffect, useState } from 'react';
import './Tickets.css';

export default function Tickets() {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        fetch("https://api.shipap.co.il/contact")
        .then(res => res.json())
        .then(data => setTimeout(() => setTickets(data), 2000));
    }, []);

    return (
        <div className='Tickets'>
            {
                tickets.length ?
                tickets.map(t => {
                    return (
                        <div key={t.id} className='card'>
                            <p><b>CreateTime:</b> {t.createTime}</p>
                            <p><b>FullName:</b> {t.fullName}</p>
                            <p><b>Phone:</b> {t.phone}</p>
                            <p><b>Email:</b> {t.email}</p>
                            <p><b>Message:</b> {t.message}</p>
                        </div>
                    )
                })
                : (
                    <>
                        <div className='card loader'></div>
                        <div className='card loader'></div>
                        <div className='card loader'></div>
                        <div className='card loader'></div>
                    </>
                )
            }
        </div>
    )
}