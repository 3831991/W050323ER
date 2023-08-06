import { useState, useEffect } from 'react';
import { TOKEN } from '../config';
import { useParams } from 'react-router-dom';

export default function ArticlePage() {
    const [article, setArticle] = useState();
    const { id } = useParams();
    
    useEffect(() => {
        fetch(`https://api.shipap.co.il/articles/${id}?token=${TOKEN}`)
        .then(res => res.json())
        .then(data => setArticle(data));
    }, []);

    return (
        <div className="ArticlePage">
            {
                article ?
                <div className='article'>
                    <h3>{article.headline}</h3>
                    <p>{article.description}</p>
                    <img src={article.imgUrl} width="100%" />
                    <p>{article.content}</p>
                </div> : 
                <p>טוען...</p>
            }
        </div>
    )
}