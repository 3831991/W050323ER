import { useEffect, useState } from 'react';
import './Articles.css';

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
            {
                articles.map(art => 
                    <p>{art.headline}</p>
                )
            }
        </>
    )
}