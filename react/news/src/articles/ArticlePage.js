import { useState, useEffect } from 'react';
import { TOKEN } from '../config';
import { useParams } from 'react-router-dom';
import ErrorPage from '../components/ErrorPage';
import Talkbacks from '../talkbacks/Talkbacks';

export default function ArticlePage() {
    const [article, setArticle] = useState();
    const [error, setError] = useState(false);
    const { id } = useParams();
    
    useEffect(() => {
        fetch(`https://api.shipap.co.il/articles/${id}?token=${TOKEN}`)
        .then(res => res.json())
        .then(data => setArticle(data))
        .catch(() => setError(true));
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

                    <Talkbacks articleId={article.id} level={0} />
                </div> : 
                (error ? <ErrorPage /> : <p className='article'>טוען...</p>)
            }
        </div>
    )
}