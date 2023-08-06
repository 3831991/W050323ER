import { TOKEN } from '../App';
import './Articles.css';
import { useState, useEffect } from 'react';

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
                    <div key={art.id} className='card'>
                        {art.headline}
                    </div>    
                )
            }
        </div>
    )
}