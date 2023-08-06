import { Link } from 'react-router-dom';

export default function Card({ article }) {
    return (
        <Link to={`/article/${article.id}`}>
            <div className='card'>
                <div className='card-body'>
                    <img src={article.imgUrl} />
                </div>

                <header>{article.headline}</header>
                <footer>{article.description}</footer>
            </div>
        </Link>
    )
}