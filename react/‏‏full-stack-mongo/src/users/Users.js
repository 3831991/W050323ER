import './Users.css';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { AiFillDislike, AiFillLike, AiFillEdit, AiOutlineRight, AiOutlineLeft, AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { BsFillTrash3Fill } from 'react-icons/bs';

export default function Users() {
    const [users, setUsers] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    async function getUsers() {
        const res = await fetch("http://localhost:4444/users");
        const data = await res.json();
        setUsers(data);
    }

    useEffect(() => {
        getUsers();
    }, []);

    function like(user) {
        user.likes++;
        setUsers([...users]);

        fetch(`http://localhost:4444/users/${user._id}/like`, {
            method: 'POST',
        });
    }

    function dislike(user) {
        user.dislikes++;
        setUsers([...users]);

        fetch(`http://localhost:4444/users/${user._id}/dislike`, {
            method: 'POST',
        });
    }

    const remove = _id => {
        if (!window.confirm("האם למחוק את המשתמש?")) {
            return;
        }

        fetch(`http://localhost:4444/users/${_id}`, {
            method: 'DELETE',
        })
        .then(() => {
            setUsers(users.filter(x => x._id !== _id));
        });
    }

    const next = () => {
        setPage(page + 1);
    }
    
    const prev = () => {
        setPage(page - 1);
    }

    const start = () => {
        setPage(1);
    }

    const end = () => {
        setPage(Math.ceil(users.length / limit));
    }

    return (
        <div>
            <h2>משתמשים</h2>
            <button className='returnLink'>
                <Link to="/users/new">+ משתמש חדש</Link>
            </button>

            <select value={limit} onChange={ev => setLimit(ev.target.value)}>
                <option>10</option>
                {users.length >= 20 && <option>20</option>}
                {users.length >= 30 && <option>30</option>}
                {users.length >= 50 && <option>50</option>}
                {users.length >= 100 && <option>100</option>}
            </select>

            
            <div className='arrows'>
                <button disabled={page >= Math.ceil(users.length / limit)} onClick={end}><AiOutlineDoubleRight /></button>
                <button disabled={page >= Math.ceil(users.length / limit)} onClick={next}><AiOutlineRight /></button>
                עמוד {page} מתוך {Math.ceil(users.length / limit)}
                <button disabled={page <= 1} onClick={prev}><AiOutlineLeft /></button>
                <button disabled={page <= 1} onClick={start}><AiOutlineDoubleLeft /></button>
            </div>

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
                    users.slice((page - 1) * limit, limit * page).map((u, i) => 
                        <tr key={u._id}>
                            <td>{(page - 1) * limit + i + 1}</td>
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

                                <Link to={`/users/${u._id}`}><button className='green'><AiFillEdit /></button></Link>
                                <button className='red' onClick={() => remove(u._id)}><BsFillTrash3Fill /></button>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}