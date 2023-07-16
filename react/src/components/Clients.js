import { useEffect, useState } from 'react';
import './Clients.css';

export default function Clients() {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetch("https://api.shipap.co.il/clients")
            .then(res => res.json())
            .then(data => setClients(data));

        return () => console.log('WillUnmount');
    }, []);

    return (
        <>
            {
                clients.map((client) => {
                    return (
                        <div key={client.id}>
                            <p>{client.firstName} {client.lastName}</p>
                        </div>
                    )
                })
            }
        </>
    )
}