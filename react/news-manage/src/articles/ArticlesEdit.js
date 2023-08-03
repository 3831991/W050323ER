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

    return (
        <div className='ArticlesEdit'>
            <button className='returnLink'>
                <Link to="/"><AiOutlineRight /> חזרה לרשימת הכתבות</Link>
            </button>

            {
                item &&
                <>
                    <h2>{item.id ? 'עריכת' : 'הוספת'} כתבה</h2>

                    <div>

                    </div>
                </>
            }
        </div>
    )
}