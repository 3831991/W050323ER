import { TOKEN } from '../config';
import './Articles.css';
import { useState, useEffect } from 'react';
import { Card } from './Card';

export default function Articles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch(`https://api.shipap.co.il/articles?token=${TOKEN}`)
        .then(res => res.json())
        .then(data => setArticles(data));
    }, []);

    return (
        <div className="Articles">
            {
                articles.map(art => 
                    <Card key={art.id} article={art} />
                )
            }
        </div>
    )
}