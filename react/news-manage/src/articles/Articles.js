import { useEffect, useState } from 'react';
import './Articles.css';
import moment from 'moment';
import { AiFillEdit } from 'react-icons/ai';
import { BsFillTrash3Fill } from 'react-icons/bs';

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
                    <tr>
                        <td>{i + 1}</td>
                        <td>{moment(art.addedTime).format('DD/MM/YY')}</td>
                        <td>{moment(art.publishDate).format('DD/MM')}</td>
                        <td>{art.headline}</td>
                        <td>{art.views}</td>
                        <td>
                            <button className='green'><AiFillEdit /></button>
                            <button className='red'><BsFillTrash3Fill /></button>
                        </td>
                    </tr>
                )
            }
            </tbody>
        </table>
    )
}