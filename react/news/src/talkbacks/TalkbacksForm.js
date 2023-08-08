import { TOKEN } from '../config';
import './Talkbacks.css';
import { useState } from 'react';

export default function TalkbacksForm({ articleId, parent }) {
    const [formData, setFormData] = useState({
        name: '',
        comment: '',
    });

    const addComment = ev => {
        ev.preventDefault();

        fetch(`https://api.shipap.co.il/articles/${articleId}/talkbacks?token=${TOKEN}`, {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                ...formData,
                parent: parent || 0,
            }),
        })
        .then(res => res.json())
        .then(data => {

        });
    }

    const inputHandle = ev => {
        const { name, value } = ev.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    return (
        <div className={'TalkbacksForm' + (!parent && ' block')}>
            <form onSubmit={addComment}>
                <input type="text" placeholder='שם מלא' required name='name' onChange={inputHandle} />
                <textarea placeholder='תגובה' cols="30" rows="10" required name='comment' onChange={inputHandle}></textarea>
                <button>שליחת התגובה</button>
                <p>יש לכתוב בצורה נאותה המדברת לגופו של עניין (אין לכתוב תגובה אישית לאנשים)</p>
            </form>
        </div>
    )
}