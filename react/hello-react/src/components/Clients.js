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

    function toggle(clientId) {
        const list = [...clients];
        const client = list.find(x => x.id === clientId);
        
        client.isActive = !client.isActive;
        
        setClients(list);
    }

    return (
        <div className="Clients">
            {
                clients.map(c => {
                    return (
                        <div key={c.id}>
                            <p onClick={() => toggle(c.id)} className={c.isActive ? 'active' : ''}>{c.firstName} {c.lastName}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}