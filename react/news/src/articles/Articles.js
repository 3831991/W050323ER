import { TOKEN } from '../config';
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
                        <div className='card-body'>
                            <img src={art.imgUrl} />
                        </div>

                        <header>{art.headline}</header>

                        <footer>{art.description}</footer>
                    </div>    
                )
            }
        </div>
    )
}