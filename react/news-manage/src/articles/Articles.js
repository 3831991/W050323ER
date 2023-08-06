import { useContext, useEffect, useState } from 'react';
import './Articles.css';
import moment from 'moment';
import { AiFillEdit } from 'react-icons/ai';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

export default function Articles() {
    const [articles, setArticles] = useState([]);
    const navigate = useNavigate();
    const { setLoading, snackbar } = useContext(UserContext);

    useEffect(() => {
        setLoading(true);

        fetch("https://api.shipap.co.il/articles", {
            credentials: 'include',
        })
        .then(res => res.json())
        .then(data => setArticles(data))
        .finally(() => setLoading(false));
    }, [setLoading]);

    const remove = id => {
        if (!window.confirm("האם למחוק את הכתבה?")) {
            return;
        }

        setLoading(true);

        fetch(`https://api.shipap.co.il/articles/${id}`, {
            credentials: 'include',
            method: 'DELETE',
        })
        .then(() => {
            setArticles(articles.filter(x => x.id !== id));
        })
        .finally(() => {
            setLoading(false);
            snackbar('הכתבה נמחקה בהצלחה');
        });
    }
    
    return (
        <>
            <button className='returnLink'>
                <Link to="/article/new">+ כתבה חדשה</Link>
            </button>
        
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>תאריך הוספה</th>
                        <th>תאריך פרסום</th>
                        <th>כותרת</th>
                        <th>צפיות</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                    articles.map((art, i) => 
                        <tr key={art.id} onDoubleClick={() => navigate(`/article/${art.id}`)}>
                            <td>{i + 1}</td>
                            <td>{moment(art.addedTime).format('DD/MM/YY')}</td>
                            <td>{moment(art.publishDate).format('DD/MM')}</td>
                            <td>{art.headline}</td>
                            <td>{art.views}</td>
                            <td>
                                <Link to={`/article/${art.id}`}><button className='green'><AiFillEdit /></button></Link>
                                <button className='red' onClick={() => remove(art.id)}><BsFillTrash3Fill /></button>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </>
    )
}