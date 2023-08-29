import './Dashboard.css';
import { useEffect } from 'react';

export default function Dashboard() {

    useEffect(() => {
        const url = 'http://localhost:4000/dashboard';

        Promise.all([
            fetch(`${url}/grades/average`).then(res => res.json()),
            fetch(`${url}/grades/amount`).then(res => res.json()),
            fetch(`${url}/grades/dev`).then(res => res.json()),
            fetch(`${url}/grades/max`).then(res => res.json()),
            fetch(`${url}/grades/min`).then(res => res.json()),
            fetch(`${url}/users/amount`).then(res => res.json()),
            fetch(`${url}/users/amount-year`).then(res => res.json()),
            fetch(`${url}/users/last/10`).then(res => res.json()),
        ]);

    }, []);

    return (
        <div>Dashboard</div>
    )
}
