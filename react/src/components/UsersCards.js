import { useState } from 'react';
import './Users.css';
import { users } from './UsersData';
import moment from 'moment';

export default function UsersCards() {
    const [data, setData] = useState(users.slice(0, 10));

    const removeUser = (userId) => {
        const newArr = data.filter(user => user.id !== userId);

        setData(newArr);
    };

    return (
        <>
        {
            data.length ?
            (
                <>
                    {
                        data.map((user, i) => {
                            return (
                                <div key={user.id} className='card'>
                                    <h3>{user.firstName} {user.lastName}</h3>
                                    <p><b>אימייל: </b> {user.email}</p>
                                    <p><b>טלפון: </b> {user.phone}</p>
                                    <p><b>תאריך לידה: </b> {moment(user.birthday).format('DD/MM/yyy')}</p>
                                    <button className="remove" onClick={() => removeUser(user.id)}>❌</button>
                                </div>
                            )
                        })
                    }
                </>
            ) :
            <p className='noData'>אין נתונים</p>
        }
        </>
    );
}