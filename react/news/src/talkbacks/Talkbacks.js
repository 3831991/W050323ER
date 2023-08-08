import './Talkbacks.css';
import { useState, useEffect } from 'react';
import TalkbacksForm from './TalkbacksForm';
import { TOKEN } from '../config';
import moment from 'moment';

export default function Talkbacks({ articleId }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://api.shipap.co.il/articles/${articleId}/talkbacks?token=${TOKEN}`)
        .then(res => res.json())
        .then(data => setData(data));
    }, []);

    const commentToggle = item => {
        item.isShowComment = !item.isShowComment;
        setData([...data]);
    }

    return (
        <div className='Talkbacks'>
            <h3>תגובות</h3>

            {
                !data.length ?
                <>
                    <p>היה הראשון להגיב..</p>
                    <TalkbacksForm articleId={articleId} />
                </> :
                data.map((t, i) => 
                    <div key={t.id} className='talkbackContainer'>
                        <div className='grid'>
                            <div>{i + 1}</div>
                            <div>{t.name} <i>({moment(t.time).format('DD/MM/Y H:mm')})</i></div>
                            <div className='btnFrame'>
                                <button onClick={() => commentToggle(t)}>הגב</button>
                            </div>
                            <div className='content'>{t.comment}</div>
                        </div>

                        {t.isShowComment && <TalkbacksForm articleId={articleId} parent={t.id} />}
                    </div>    
                )
            }
            
        </div>
    )
}