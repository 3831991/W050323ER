export function Card({ article }) {
    return (
        <div className='card'>
            <div className='card-body'>
                <img src={article.imgUrl} />
            </div>

            <header>{article.headline}</header>
            <footer>{article.description}</footer>
        </div>  
    )
}