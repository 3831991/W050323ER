import './Talkbacks.css';
import { useState, useEffect } from 'react';
import TalkbacksForm from './TalkbacksForm';
import { TOKEN } from '../config';
import moment from 'moment';

export default function Talkbacks({ articleId, children, level }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (children) {
            setData(children);
        } else {
            fetch(`https://api.shipap.co.il/articles/${articleId}/talkbacks?token=${TOKEN}`)
            .then(res => res.json())
            .then(data => {
                // זה פחות יעיל, היות וזו לולאה דו מימדית
                // data.forEach(x => {
                //     x.children = data.filter(c => c.parent == x.id);
                // });

                const dictionary = {};

                data.forEach(x => {
                    if (!dictionary[x.parent]) {
                        dictionary[x.parent] = [];
                    }

                    dictionary[x.parent].push(x);
                });

                data.forEach(x => {
                    x.children = dictionary[x.id] || [];
                });

                setData(dictionary[0]);
            });
        }
    }, []);

    const commentToggle = item => {
        item.isShowComment = !item.isShowComment;
        setData([...data]);
    }

    /**
     * צריך לבדוק למה הפונקציה הזאת שאדם כתבה לא עובדת
     */
    const addChild = (parentId, item) => {
        const arr = [...data];
        const parent = arr.find(x => x.id == parentId);
        parent.children.push(item);
        parent.isShowComment = false;
        setData(arr);
    }

    return (
        <div className='Talkbacks'>
            {children ? '' : <h3>תגובות</h3>}

            {
                !data.length ?
                <>
                    <TalkbacksForm articleId={articleId} added={item => setData([...data, item])} />
                </> :
                data.map((t, i) => 
                    <div key={t.id} style={{ paddingRight: level * 20 }}>
                        <div className='talkbackContainer'>
                            <div className='grid'>
                                <div><div className='circle' style={{backgroundColor: 'hsl('+ t.id * 40 +' 48% 47%)'}}>{t.name.slice(0,1)}</div></div>
                                <div>{t.name} <i>({moment(t.time).format('DD/MM/Y H:mm')})</i></div>
                                <div className='btnFrame'>
                                    <button style={{backgroundColor: 'hsl('+ t.id * 40 +' 48% 47%)'}} onClick={() => commentToggle(t)}>הגב</button>
                                </div>
                                <div className='content'>{t.comment}</div>
                            </div>

                            {t.isShowComment && <TalkbacksForm articleId={articleId} parent={t.id} added={item => addChild(t.id, item)} />}
                        </div>

                        {t.children.length ? <Talkbacks articleId={articleId} children={t.children} level={level + 1} /> : ''}
                    </div>
                )
            }
        </div>
    )
}