import { TOKEN } from '../config';
import './Talkbacks.css';
import { useState } from 'react';

export default function TalkbacksForm({ articleId, parent }) {
    const [data, setData] = useState([]);
    const [comment, setComment] = useState('');

    const addComment = () => {
        fetch(`https://api.shipap.co.il/articles/${articleId}/talkbacks?token=${TOKEN}`, {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                comment,
                parent,
            }),
        })
        .then(res => res.json())
        .then(data => {

        });
    }

    return (
        <div className='TalkbacksForm'>

        </div>
    )
}