import { useEffect, useState } from 'react';
import './Articles.css';
import moment from 'moment';
import { AiFillEdit } from 'react-icons/ai';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Articles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("https://api.shipap.co.il/articles", {
            credentials: 'include',
        })
        .then(res => res.json())
        .then(data => setArticles(data));
    }, []);
    
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
                        <tr key={art.id}>
                            <td>{i + 1}</td>
                            <td>{moment(art.addedTime).format('DD/MM/YY')}</td>
                            <td>{moment(art.publishDate).format('DD/MM')}</td>
                            <td>{art.headline}</td>
                            <td>{art.views}</td>
                            <td>
                                <Link to={`/article/${art.id}`}><button className='green'><AiFillEdit /></button></Link>
                                <button className='red'><BsFillTrash3Fill /></button>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </>
    )
}