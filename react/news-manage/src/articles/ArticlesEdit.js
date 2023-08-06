import { useContext, useEffect, useState } from 'react';
import './Articles.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';
import moment from 'moment';
import { UserContext } from '../App';

export default function ArticlesEdit() {
    const { id } = useParams();
    const [item, setItem] = useState();
    const navigate = useNavigate();
    const { setLoading, snackbar } = useContext(UserContext);

    useEffect(() => {
        if (id === 'new') {
            setItem({
                publishDate: moment().format("YYYY-MM-DD"),
                headline: '',
                description: '',
                content: '',
            });
        } else {
            setLoading(true);

            fetch(`https://api.shipap.co.il/articles/${id}`, {
                credentials: 'include',
            })
            .then(res => res.json())
            .then(data => setItem(data))
            .finally(() => setLoading(false));
        }
    }, [id, setLoading]);

    const handelInput = ev => {
        const { name, value } = ev.target;

        setItem({
            ...item,
            [name]: value,
        });
    }

    const updateArticle = ev => {
        ev.preventDefault();
        setLoading(true);

        fetch("https://api.shipap.co.il/articles" + (item.id ? `/${id}` : ''), {
            credentials: 'include',
            method: item.id ? "PUT" : "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(item),
        })
        .then(() => {
            if (item.id) {
                snackbar('הכתבה נשמרה בהצלחה');
            } else {
                snackbar('הכתבה נוספה בהצלחה');
            }

            navigate('/');
        })
        .finally(() => setLoading(false));
    }

    return (
        <div className='ArticlesEdit'>
            <button className='returnLink'>
                <Link to="/"><AiOutlineRight /> חזרה לרשימת הכתבות</Link>
            </button>

            {
                item &&
                <>
                    <h2>{item.id ? 'עריכת' : 'הוספת'} כתבה</h2>

                    <form onSubmit={updateArticle}>
                        <label>
                            כותרת:
                            <input type="text" name="headline" value={item.headline} onChange={handelInput} />
                        </label> 

                        <label>
                            תאריך פרסום:
                            <input type="date" name="publishDate" value={item.publishDate} onChange={handelInput} />
                        </label> 

                        <label>
                            תיאור:
                            <textarea name="description" cols="30" rows="5" value={item.description} onChange={handelInput}></textarea>
                        </label>

                        <label>
                            תוכן:
                            <textarea name="content" cols="30" rows="10" value={item.content} onChange={handelInput}></textarea>
                        </label>

                        <button>{item.id ? 'שמירה' : 'הוספה'}</button>
                    </form>
                </>
            }
        </div>
    )
}