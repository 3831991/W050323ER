import './Users.css';
import { useEffect, useState } from 'react';
import moment from 'moment';

export default function Users() {
    const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:4000/users")
    //     .then(res => res.json())
    //     .then(data => setUsers(data.slice(0, 50)));
    // }, []);

    async function getUsers() {
        const res = await fetch("http://localhost:4000/users");
        const data = await res.json();
        setUsers(data.slice(0, 50));
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>
            <h2>משתמשים</h2>

            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>תאריך יצירה</th>
                        <th>שם פרטי</th>
                        <th>שם משפחה</th>
                        <th>אימייל</th>
                        <th>טלפון</th>
                    </tr>
                </thead>
                <tbody>
                {
                    users.map((u, i) => 
                        <tr key={u.id}>
                            <td>{i + 1}</td>
                            <td>{moment(u.createdTime).format("DD/MM/YY")}</td>
                            <td>{u.firstName}</td>
                            <td>{u.lastName}</td>
                            <td>{u.email}</td>
                            <td>{u.phone}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}