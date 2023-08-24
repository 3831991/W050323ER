import { useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Link, useParams } from "react-router-dom"

export default function UsersEdit() {
    const { userId } = useParams();
    const [user, setUser] = useState();

    const structure = [
        { name: 'firstName', type: 'text', label: 'שם פרטי' },
        { name: 'lastName', type: 'text', label: 'שם משפחה' },
        { name: 'phone', type: 'tel', label: 'טלפון' },
        { name: 'email', type: 'email', label: 'אימייל' },
        { name: 'userName', type: 'text', label: 'שם משתמש' },
        { name: 'password', type: 'password', label: 'סיסמה' },
    ];

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
            
        }
    }, [userId]);
    
    const handleInput = ev => {
        const { name, value } = ev.target;

        setUser({
            ...user,
            [name]: value,
        });
    }

    return (
        <>
            <button className='returnLink'>
                <Link to={'/users'}><AiOutlineRight /> חזרה למשתמשים</Link>
            </button>
            {
                user &&
                <form className="smallFrame">
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