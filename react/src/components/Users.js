import { useState } from 'react';
import './Users.css';
import { users } from './UsersData';

export default function Users() {
    const [data, setData] = useState(users);

    return (
        <>
            {
                data.map(user => {
                    return (
                        <p>{user.firstName} {user.lastName}</p>
                    )
                })
            }
        </>
    );
}