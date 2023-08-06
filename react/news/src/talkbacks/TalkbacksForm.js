import './Talkbacks.css';
import { useState } from 'react';

export default function TalkbacksForm({ articleId, parent }) {
    const [data, setData] = useState([]);


    return (
        <div className='TalkbacksForm'>
            כאן יהיה אפשר להגיב
        </div>
    )
}