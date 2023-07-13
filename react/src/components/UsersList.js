import { useState } from 'react';
import './Users.css';
import { users } from './UsersData';

export default function UsersList() {
    const [data, setData] = useState(users.slice(0, 10));

    return (
        <>
        {
            data.length ?
            (
                <ul>
                    {
                        data.map(user => {
                            return (
                                <li key={user.id}>
                                    {user.firstName} {user.lastName}
                                </li>
                            )
                        })
                    }
                </ul>
            ) :
            <p className='noData'>אין נתונים</p>
        }
        </>
    );
}