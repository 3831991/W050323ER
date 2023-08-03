import { useEffect, useState } from 'react';
import './Articles.css';
import { Link, useParams } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';

export default function ArticlesEdit() {
    const { id } = useParams();
    const [item, setItem] = useState();

    useEffect(() => {
        if (id == 'new') {
            setItem({
                publishDate: '',
                headline: '',
                description: '',
                content: '',
            });
        } else {
            fetch(`https://api.shipap.co.il/articles/${id}`, {
                credentials: 'include',
            })
            .then(res => res.json())
            .then(data => setItem(data));
        }
    }, []);

    const handelInput = ev => {
        const { name, value } = ev.target;

        setItem({
            ...item,
            [name]: value,
        });
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

                    <form>
                        <label>
                            כותרת:
                            <input type="text" name="headline" value={item.headline} onChange={handelInput} />
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