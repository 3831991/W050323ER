import './Users.css';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { AiFillDislike, AiFillLike, AiFillEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { BsFillTrash3Fill } from 'react-icons/bs';

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
        user.likes++;
        setUsers([...users]);

        fetch(`http://localhost:4000/users/${user.id}/like`, {
            method: 'POST',
        });
    }

    function dislike(user) {
        user.dislikes++;
        setUsers([...users]);

        fetch(`http://localhost:4000/users/${user.id}/dislike`, {
            method: 'POST',
        });
    }

    return (
        <div>
            <h2>משתמשים</h2>
            <button className='returnLink'>
                <Link to="/users/new">+ משתמש חדש</Link>
            </button>

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
                            <td onMouseDown={ev => ev.preventDefault()}>
                                <span className='like'>
                                    <AiFillLike onClick={() => like(u)} />
                                    <i> {u.likes || 0}</i>
                                </span> 
                                <span className='dislike'>
                                    <AiFillDislike onClick={() => dislike(u)} />
                                    <i> {u.dislikes || 0}</i>
                                </span>

                                <Link to={`/users/${u.id}`}><button className='green'><AiFillEdit /></button></Link>
                                <button className='red'><BsFillTrash3Fill /></button>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}