import './Users.css';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';

export default function Users() {
    const [users, setUsers] = useState([]);

    async function getUsers() {
        const res = await fetch("http://localhost:4000/users");
        const data = await res.json();
        setUsers(data.slice(0, 50));
    }

    useEffect(() => {
        getUsers();
    }, []);

    function like(user) {
        fetch(`http://localhost:4000/users/${user.id}/like`, {
            method: 'POST',
        })
        .then(() => {
            // user.like++;
        });
    }

    function dislike(user) {
        fetch(`http://localhost:4000/users/${user.id}/dislike`, {
            method: 'POST',
        })
        .then(() => {
            // user.dislike++;
        });
    }

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
                        <th></th>
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
                            <td>
                                <span className='like'><AiFillLike onClick={() => like(u)} /> {u.like}</span> 
                                <span className='dislike'><AiFillDislike onClick={() => dislike(u)} /> {u.dislike}</span>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}