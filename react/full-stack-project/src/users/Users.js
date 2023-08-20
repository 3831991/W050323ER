import './Users.css';
import { useEffect } from 'react';

export default function Users() {
    useEffect(() => {
        fetch("http://localhost:4000/users")
        .then(res => res.json())
        .then(data => console.log(data))
    }, []);
    
    return (
        <div>
            <h2>משתמשים</h2>


        </div>
    )
}