import { useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom"

export default function UsersEdit() {
    const { userId } = useParams();
    const [user, setUser] = useState();
    const navigate = useNavigate();

    const structure = [
        { name: 'firstName', type: 'text', label: 'שם פרטי' },
        { name: 'lastName', type: 'text', label: 'שם משפחה' },
        { name: 'phone', type: 'tel', label: 'טלפון' },
        { name: 'email', type: 'email', label: 'אימייל' },
        { name: 'userName', type: 'text', label: 'שם משתמש' },
        { name: 'password', type: 'password', label: 'סיסמה' },
    ];

    async function getUser() {
        const res = await fetch(`http://localhost:4000/users/${userId}`);
        const data = await res.json();
        setUser(data);
    }

    useEffect(() => {
        if (userId === 'new') {
            setUser({
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
                userName: "",
                password: "",
            });
        } else {
            getUser();
        }
    }, [userId]);
    
    const handleInput = ev => {
        const { name, value } = ev.target;

        setUser({
            ...user,
            [name]: value,
        });
    }

    const save = ev => {
        ev.preventDefault();

        fetch("http://localhost:4000/users" + (user.id ? `/${user.id}` : ""), {
            method: user.id ? 'PUT' : 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        .then(() => {
            navigate('/users');
        });
    }

    return (
        <>
            <button className='returnLink'>
                <Link to={'/users'}><AiOutlineRight /> חזרה למשתמשים</Link>
            </button>
            {
                user &&
                <form className="smallFrame" onSubmit={save}>
                    <h2>{user.id ? 'עריכת' : 'הוספת'} משתמש</h2>

                    {
                        structure.map(s =>
                            <label key={s.name}>
                                {s.label}
                                <input type={s.type} name={s.name} value={user[s.name]} onChange={handleInput} />
                            </label>
                        )
                    }

                    <button>{user.id ? 'שמירה' : 'הוספה'}</button>
                </form>
            }
        </>
    )
}