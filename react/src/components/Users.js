import { useState } from 'react';
import './Users.css';
import { users } from './UsersData';
import moment from 'moment';

export default function Users() {
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
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>שם מלא</th>
                            <th>אימייל</th>
                            <th>טלפון</th>
                            <th>תאריך לידה</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        data.map((user, i) => {
                            return (
                                <tr key={user.id}>
                                    <td>{i + 1}</td>
                                    <td>{user.firstName} {user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{moment(user.birthday).format('DD/MM/yyy')}</td>
                                    <td>
                                        <button className="remove" onClick={() => removeUser(user.id)}>❌</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            ) :
            <p className='noData'>אין נתונים</p>
        }
        </>
    );
}