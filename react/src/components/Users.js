import { useState } from 'react';
import './Users.css';
import { users } from './UsersData';
import moment from 'moment';

export default function Users() {
    const [data, setData] = useState(users);

    return (
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
                        <tr>
                            <td>{i + 1}</td>
                            <td>{user.firstName} {user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{moment(user.birthday).format('DD/MM/yyy')}</td>
                            <td>
                                <button class="remove">❌</button>
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    );
}